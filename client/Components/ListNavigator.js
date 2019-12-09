import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ShoppingListScreen from './Pages/ShoppingListScreen';
import PantryListScreen from './Pages/PantryListScreen';

import ListScreen from './Pages/ListScreen';

const ListNavigator = createStackNavigator(
    {
        Shopping: ShoppingListScreen,
        Pantry: PantryListScreen,
        Main: ListScreen
    },
    {
        initialRouteName: "Main",
    }
);

export default createAppContainer(ListNavigator);
