import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MyProfileScreen from './Pages/MyProfile';
import SettingsScreen from './Pages/SettingsScreen';
import EditFilters from './Pages/EditSavedFilters';
import EditFiltersScreen from './Pages/EditSavedFilters';
import ShoppingListScreen from './Pages/ShoppingListScreen';
import PantryListScreen from './Pages/PantryListScreen';

const SettingsNavigator = createStackNavigator(
    {
        Profile: MyProfileScreen,
        Filters: EditFiltersScreen,
        Yes: SettingsScreen,
        Shopping: ShoppingListScreen,
        Pantry: PantryListScreen
    },
    {
        initialRouteName: "Yes"
    }
);

export default createAppContainer(SettingsNavigator);
