import { StackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import Login from '../containers/Login';

const LoginNavigator = StackNavigator({
  Login: { 
    screen: Login,
    path: '/',
    navigationOptions: {
      title: "Login",
    },
  },
}, {
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
  },
  cardStyle: {
    backgroundColor: '#fff'
  },
});

export default LoginNavigator;