const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Profile = require('../../models/Profile')
const User = require('../../models/User')

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar'])

    if(!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' })
    }

    res.json(profile)
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private
router.post('/', [ auth ], 
  async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      bio,
      location
    } = req.body

    // Build profile object
    const profileFields = {}
    profileFields.user = req.user.id
    if(bio) profileFields.bio = bio
    if(location) profileFields.location = location

    try {
      let profile = await Profile.findOne({ user: req.user.id })

      if(profile) {
        // Update
        profile = await Profile.findOneAndUpdate(   { user: req.user.id }, 
          { $set: profileFields },
          { new: true }
        )

        return res.json(profile)
      }

      // Create
      profile = new Profile(profileFields)

      await profile.save()
      res.json(profile)
    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar'])
    res.json(profiles)
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.find({ user: req.params.user_id }).populate('user', ['name', 'avatar'])

    if(!profile) return res.status(400).json({ msg: 'Profile not found' })

    res.json(profile)
  } catch(err) {
    console.error(err.message)
    if(err.kind == 'ObjectId') {
      res.status(400).json({ msg: 'Profile not found' })
    }
    res.status(500).send('Server Error')
  }
})

// @route   DELETE api/profile
// @desc    Delete profile, user & posts
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    // @todo - remove users posts

    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id })
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id })
    res.json({ msg: 'User deleted' })
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   PUT api/profile/cookbook
// @desc    Add cookbook item to profile
// @access  Private
router.put('/cookbook', [auth, 
    [
      check('title', 'Title is required')
        .not()
        .isEmpty(),
      check('company', 'Company is required')
        .not()
        .isEmpty(),
      check('from', 'From date is required')
        .not()
        .isEmpty()
    ]
  ], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    } = req.body

    const newcook = {
      title, 
      company,
      location,
      from,
      to,
      current,
      description
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id })

      profile.cookbook.unshift(newcook)

      await profile.save()

      res.json(profile)
    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route   DELETE api/profile/cookbook/:cook_id
// @desc    Delete cookbook item from profile
// @access  Private
router.delete('/cookbook/:cook_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })

    // Get remove index  
    const removeIndex = profile.cookbook.map(item => item.id).indexOf(req.params.cook_id)

    profile.cookbook.splice(removeIndex, 1)

    await profile.save()

    res.json(profile)
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   PUT api/profile/pantry
// @desc    Add pantry item to profile
// @access  Private
router.put('/pantry', [auth, 
    [
      check('school', 'School is required')
        .not()
        .isEmpty(),
      check('degree', 'Degree is required')
        .not()
        .isEmpty(),
      check('fieldofstudy', 'Field of study is required')
        .not()
        .isEmpty(),
      check('from', 'From date is required')
        .not()
        .isEmpty()
    ]
  ], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body

    const newpan = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id })

      profile.pantry.unshift(newpan)

      await profile.save()

      res.json(profile)
    } catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route   DELETE api/profile/pantry/:pan_id
// @desc    Delete pantry item from profile
// @access  Private
router.delete('/pantry/:pan_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })

    // Get remove index  
    const removeIndex = profile.pantry.map(item => item.id).indexOf(req.params.pan_id)

    profile.pantry.splice(removeIndex, 1)

    await profile.save()

    res.json(profile)
  } catch(err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router