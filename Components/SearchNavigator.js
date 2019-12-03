import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './Pages/SearchScreen';
import SearchResultScreen from './Pages/SearchResultScreen';
import RecipeResultScreen from './Pages/RecipeResultScreen';

const SearchNavigator = createStackNavigator(
    {
        Results: SearchResultScreen,
        Recipe: RecipeResultScreen,
        Main: SearchScreen
    },
    {
        initialRouteName: "Main"
    }
);

export default createAppContainer(SearchNavigator);
