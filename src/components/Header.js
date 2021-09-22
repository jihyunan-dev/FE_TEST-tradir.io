import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Gnb>
      <Nav>
        <NavList>
          <NavItem>
            <NavBtn to="/home">홈</NavBtn>
          </NavItem>
          <NavItem>
            <NavBtn to="/beerlist">맥주 리스트</NavBtn>
          </NavItem>
        </NavList>
      </Nav>
    </Gnb>
  );
};

const Gnb = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const Nav = styled.nav`
  height: 100%;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavItem = styled.li``;

const NavBtn = styled(Link)`
  padding: 30px;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    color: var(--red);
  }
`;

export default Header;
