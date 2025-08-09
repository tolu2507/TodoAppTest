/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
// In App.js in a new project

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import ActiveHome from '../assets/activehome.svg';
import InactiveHome from '../assets/inactivehome.svg';
import ActiveCalender from '../assets/activecalender.svg';
import InactiveCalender from '../assets/inactivecalender.svg';
import ActiveSettings from '../assets/activemenu.svg';
import InactiveSettings from '../assets/inactivemenu.svg';
import DashboardScreen from '../screens/dashboardscreen';
import ModalScreen from '../screens/modalscreen';
import SettingsScreen from '../screens/settingsscreen';
import { useAuth } from '../hooks';
import AccountScreen from '../screens/accountscreen';
import ThemeScreen from '../screens/themescreen';
import AppIconScreen from '../screens/appiconscreen';
import HelpcenterScreen from '../screens/helpcenter';
import UpcomingScreen from '../screens/upcomingscreen';

function MyTabBar({ state, descriptors, navigation }: any) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const switchs = useAuth((states: any) => states.switchs);

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const icon =
          label.toLowerCase() === 'dashboard' ? (
            isFocused ? (
              <ActiveHome />
            ) : (
              <InactiveHome />
            )
          ) : label.toLowerCase() === 'upcoming' ? (
            isFocused ? (
              <ActiveCalender />
            ) : (
              <InactiveCalender />
            )
          ) : isFocused ? (
            <ActiveSettings />
          ) : (
            <InactiveSettings />
          );

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tab,
              switchs && { backgroundColor: 'black' },
              isFocused && { borderColor: '#24A19C' },
            ]}
          >
            {icon}
            <Text
              allowFontScaling={true}
              adjustsFontSizeToFit={true}
              style={{
                color: isFocused ? '#24A19C' : switchs ? 'white' : colors.text,
              }}
            >
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props: any) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Upcoming" component={UpcomingScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function TabStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Accounts" component={AccountScreen} />
      <Stack.Screen name="Theme" component={ThemeScreen} />
      <Stack.Screen name="Appicon" component={AppIconScreen} />
      <Stack.Screen name="Helpcenter" component={HelpcenterScreen} />
      <Stack.Screen
        name="Modal"
        component={ModalScreen}
        options={{ presentation: 'transparentModal' }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
});
