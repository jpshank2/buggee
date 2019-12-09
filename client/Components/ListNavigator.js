import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ShoppingListScreen from './Pages/ShoppingListScreen';
<<<<<<< HEAD
import PantryListScreen from './Pages/PantryListScreen';
=======
import GroceryListScreen from './Pages/PantryListScreen';
>>>>>>> 8823d36a0f14745dcca817b477faa2bc78b97571
import ListScreen from './Pages/ListScreen';

const ListNavigator = createStackNavigator(
    {
        Shopping: ShoppingListScreen,
<<<<<<< HEAD
        Groceries: PantryListScreen,
=======
        Pantry: GroceryListScreen,
>>>>>>> 8823d36a0f14745dcca817b477faa2bc78b97571
        Main: ListScreen
    },
    {
        initialRouteName: "Main"
    }
);

export default createAppContainer(ListNavigator);
