import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MyProfileScreen from './Pages/MyProfile';
import SettingsScreen from './Pages/SettingsScreen';

const SettingsNavigator = createStackNavigator(
    {
        Profile: MyProfileScreen,
        Yes: SettingsScreen
    },
    {
        initialRouteName: "Yes"
    }
);

export default createAppContainer(SettingsNavigator);