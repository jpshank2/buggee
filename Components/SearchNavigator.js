import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './Pages/SearchScreen';
import SearchResultScreen from './Pages/SearchResultScreen';

const SearchNavigator = createStackNavigator(
    {
        Results: SearchResultScreen,
        Main: SearchScreen
    },
    {
        initialRouteName: "Main"
    }
);

export default createAppContainer(SearchNavigator);
