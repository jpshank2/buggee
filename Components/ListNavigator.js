import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ShoppingListScreen from './Pages/ShoppingListScreen';
import GroceryListScreen from './Pages/GroceryListScreen';
import ListScreen from './Pages/ListScreen';

const ListNavigator = createStackNavigator(
    {
        Shopping: ShoppingListScreen,
        Groceries: GroceryListScreen,
        Main: ListScreen
    },
    {
        initialRouteName: "Main"
    }
);

export default createAppContainer(ListNavigator);
