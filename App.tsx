import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {SplashScreen, OnboardingScreen, LoginScreen, RegisterScreen, OtpScreen} from './src/screens/AuthScreens';
import HomeScreen from './src/screens/customer/HomeScreen';
import SearchScreen from './src/screens/customer/SearchScreen';
import MyBookingsScreen from './src/screens/customer/MyBookingsScreen';
import FavoritesScreen from './src/screens/customer/FavoritesScreen';
import ProfileScreen from './src/screens/customer/ProfileScreen';
import CategoryScreen from './src/screens/customer/CategoryScreen';
import ProviderProfileScreen from './src/screens/customer/ProviderProfileScreen';
import BookingFlow from './src/screens/customer/BookingFlow';
import BookingConfirmation from './src/screens/customer/BookingConfirmation';
import BookingDetailsScreen from './src/screens/customer/BookingDetailsScreen';
import NotificationsScreen from './src/screens/customer/NotificationsScreen';
import ChatScreen from './src/screens/customer/ChatScreen';
import ProviderDashboard from './src/screens/provider/ProviderDashboard';
import ProviderRequestsScreen from './src/screens/provider/ProviderRequestsScreen';
import ProviderBookingsScreen from './src/screens/provider/ProviderBookingsScreen';
import ProviderEarningsScreen from './src/screens/provider/ProviderEarningsScreen';
import ProviderProfileTabScreen from './src/screens/provider/ProviderProfileScreen';

const Stack=createNativeStackNavigator(); const Tabs=createBottomTabNavigator();
const icon=(e:string)=>(()=><Text style={{fontSize:18}}>{e}</Text>);
function CustomerTabs(){return <Tabs.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:'#5B5FEF',tabBarInactiveTintColor:'#73788C',tabBarLabelStyle:{fontSize:10,fontWeight:'700'},tabBarStyle:{height:64,paddingTop:5}}}><Tabs.Screen name="Home" component={HomeScreen} options={{tabBarIcon:icon('🏠')}}/><Tabs.Screen name="Search" component={SearchScreen} options={{title:'Explore',tabBarIcon:icon('🔍')}}/><Tabs.Screen name="MyBookings" component={MyBookingsScreen} options={{title:'Bookings',tabBarIcon:icon('📅')}}/><Tabs.Screen name="Favorites" component={FavoritesScreen} options={{tabBarIcon:icon('❤️')}}/><Tabs.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon:icon('👤')}}/></Tabs.Navigator>}
function ProviderTabs(){return <Tabs.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:'#5B5FEF',tabBarInactiveTintColor:'#73788C',tabBarLabelStyle:{fontSize:10,fontWeight:'700'},tabBarStyle:{height:64,paddingTop:5}}}><Tabs.Screen name="Dashboard" component={ProviderDashboard} options={{tabBarIcon:icon('📊')}}/><Tabs.Screen name="Requests" component={ProviderRequestsScreen} options={{tabBarIcon:icon('📋')}}/><Tabs.Screen name="Bookings" component={ProviderBookingsScreen} options={{tabBarIcon:icon('📅')}}/><Tabs.Screen name="Earnings" component={ProviderEarningsScreen} options={{tabBarIcon:icon('💰')}}/><Tabs.Screen name="Profile" component={ProviderProfileTabScreen} options={{tabBarIcon:icon('👤')}}/></Tabs.Navigator>}
export default function App(){return <NavigationContainer><Stack.Navigator screenOptions={{headerShown:false}}><Stack.Screen name="Splash" component={SplashScreen}/><Stack.Screen name="Onboarding" component={OnboardingScreen}/><Stack.Screen name="Login" component={LoginScreen}/><Stack.Screen name="Register" component={RegisterScreen}/><Stack.Screen name="Otp" component={OtpScreen}/><Stack.Screen name="Customer" component={CustomerTabs}/><Stack.Screen name="Provider" component={ProviderTabs}/><Stack.Screen name="Category" component={CategoryScreen}/><Stack.Screen name="ProviderProfile" component={ProviderProfileScreen}/><Stack.Screen name="BookingFlow" component={BookingFlow}/><Stack.Screen name="BookingConfirmation" component={BookingConfirmation}/><Stack.Screen name="BookingDetails" component={BookingDetailsScreen}/><Stack.Screen name="Notifications" component={NotificationsScreen}/><Stack.Screen name="Chat" component={ChatScreen}/></Stack.Navigator></NavigationContainer>}
