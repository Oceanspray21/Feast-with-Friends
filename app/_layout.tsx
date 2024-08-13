import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Index from './index';
import ProfileSettingsPage from './profile';


// Custom drawer content with logo
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

// Drawer navigator setup
const Drawer = createDrawerNavigator();

const AppLayout = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: true,
      drawerStyle: {
        backgroundColor: '#f0f0f0',
      },
      drawerLabelStyle: {
        fontSize: 18,
      },
      drawerActiveBackgroundColor: '#000000',
      drawerActiveTintColor: '#ffffff',
    }}
  >
    <Drawer.Screen name="index" options={{title: "Dining Halls"}} component={Index} />
    <Drawer.Screen name="profile" options={{title: "Profile"}} component={ProfileSettingsPage} />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    padding: 16,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AppLayout;
