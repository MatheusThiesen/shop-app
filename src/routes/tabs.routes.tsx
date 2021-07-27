import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {} from "@expo/vector-icons";

import { HomeStack } from "../routes/stack.routes";
import { dynamicFontSizing } from "../utils/dynamicFontSizing";

const Tab = createBottomTabNavigator();

const icons = {};

export const TabsRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        position: "absolute",
        height: dynamicFontSizing(60),
        bottom: dynamicFontSizing(25),
        left: dynamicFontSizing(20),
        right: dynamicFontSizing(20),

        backgroundColor: "#fff",
        borderRadius: 15,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      },
    }}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Category" component={HomeStack} />
    <Tab.Screen name="Cart" component={HomeStack} />
    <Tab.Screen name="History" component={HomeStack} />
    <Tab.Screen name="Settings" component={HomeStack} />
  </Tab.Navigator>
);
