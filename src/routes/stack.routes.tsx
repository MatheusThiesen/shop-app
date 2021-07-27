import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";

import Home from "../pages/Home";
import { Product } from "../pages/Product";

interface HomeStackHeaderProps extends BottomTabScreenProps<{ state: any }> {
  // navigation: any;
  // route: any;
}

const Stack = createStackNavigator();

export const StackRoutes: React.FC = () => (
  <Stack.Navigator
    // headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#f00",
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false, title: " " }}
    />
    <Stack.Screen
      name="Product"
      component={Product}
      options={{
        title: "Detalhes",
        headerTitleStyle: {
          fontWeight: "600",
        },
      }}
    />
  </Stack.Navigator>
);

export const HomeStack: React.FC<HomeStackHeaderProps> = ({
  navigation,
  route,
}) => {
  const setTabBarVisible = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ["HomeScreen"];
    if (hideOnScreens.indexOf(routeName) > -1) return false;
    return true;
  };

  React.useLayoutEffect(() => {
    if (setTabBarVisible(route)) {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#f00",
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false, title: " " }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          title: "Detalhes",
          headerTitleStyle: {
            fontWeight: "600",
          },
        }}
      />
    </Stack.Navigator>
  );
};
