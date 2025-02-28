import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 
import Guia1 from './Guias';
import Incenso from './Incenso';
import Home from './Home';
 
const Tab = createBottomTabNavigator();
 
export default function RotasTab() {
  return (
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor:"#00ff00",}}>
        <Tab.Screen
          name="Guia"
          component={Guia1}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="necklace"
                color={color}
                size={size}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Incenso"
          component={Incenso}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="candle"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
      
  );
}