import React from 'react'
import { Link } from 'react-router-dom'

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>
      <Link to="/cookbook" className="btn btn-light">
        <i className="fab fa-black-tie text-primary"></i> View Cookbook
      </Link>
      <Link to="/pantry" className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary"></i> View Pantry
      </Link>
      <Link to="/upload-recipe" className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary"></i> Upload Recipe
      </Link>
    </div>
  )
}

export default DashboardActions
