import React from "react";

import { Container, Logo, Button, SafeArea } from "./styled";

import LogoImage from "../../assets/shoes-circle.png";

export const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <SafeArea>
        <Button activeOpacity={0.6}>
          <Logo source={LogoImage} />
        </Button>
      </SafeArea>
      {children}
    </Container>
  );
};
