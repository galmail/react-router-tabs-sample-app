import styled from "styled-components";
import { NavLink } from "react-router-dom";

type TabListContainerProps = {
  height?: string;
};

export const TabListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: ${({ height = "100vh" }: TabListContainerProps) => height};
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  color: black;
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  padding: 5px;
  background-color: #efefef;
  &.active {
    border-left: 3px solid black;
    background-color: white;
  }
`;
