import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from './src/screens/FirstScreen';

const navigator = createStackNavigator({
  First: FirstScreen
}, {
  initialRouteName: 'First',
  defaultNavigationOptions: {
    title: 'Possenger'
  }
});

export default createAppContainer(navigator);