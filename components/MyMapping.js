import React from 'react'
import SignUp from '../login/SIgnUp';
import SignIn from '../login/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from '../login/Profile';
import Search from './Search';
import FlatListData from './FlatListData';
import ProductDetails from './ProductDetails';

const Stack=createStackNavigator();
const MyMapping =() =>{
  
  return(
   <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="SignIn" component={SignIn}/>
       <Stack.Screen name="SignUp" component={SignUp}/>
       <Stack.Screen name="Search" component={Search}/>
       <Stack.Screen name="FlatListData" component={FlatListData}/>
       <Stack.Screen name='ProductDetails' component={ProductDetails}/>

       {/* <Stack.Screen name="Profile" component={Profile}/> */}
      </Stack.Navigator>
     </NavigationContainer>
     </Provider>
  );
}

export default MyMapping;