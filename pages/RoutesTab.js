import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Rebeldes from './Rebeldes';
import Imperio from './Imperio';
import Robos from './Robos';
import StackApi from './StackApi';

const Tab = createBottomTabNavigator();

export default function RoutesTab(){
  return(
    <Tab.Navigator screenOptions={{
    tabBarStyle: {height: 90}}}  initialRouteName="Imperio">

    
      <Tab.Screen name="Imperio" component={Imperio}
      options={{ headerShown:false, tabBarIcon:({color,size}) => 
      (<Image source={require('../img/darth-vader_icon-icons.com_76959.png')}/>)}}/>


      <Tab.Screen name="Rebeldes" component={Rebeldes}
      options={{headerShown:false, tabBarIcon:({color,size}) => 
      (<Image source={require('../img/scifi_starwars_rebel_alliance_icon_158234.png')}/>)}}/>


      <Tab.Screen name="Robos" component={Robos}
      options={{headerShown:false, tabBarIcon:({color,size}) => 
      (<Image source={require('../img/R2D2-icon_34499.png')}/>)}}/>

      <Tab.Screen name="StackApi" component={StackApi}
      options={{headerShown:false, tabBarIcon:({color,size}) => 
      (<Image source={require('../img/api_icon.png')}/>)}}/>
    </Tab.Navigator>
  )
}