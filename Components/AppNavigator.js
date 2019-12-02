import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './TabNavigator';

const AppNavigator = createStackNavigator(
    {
        Home: TabNavigator
    }
);

export default createAppContainer(AppNavigator);