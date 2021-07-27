import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TabsRoutes } from "./tabs.routes";
import { StackRoutes } from "./stack.routes";

const Routes = () => (
  <NavigationContainer>
    <TabsRoutes />
    {/* <StackRoutes /> */}
  </NavigationContainer>
);

export default Routes;
