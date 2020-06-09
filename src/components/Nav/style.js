import styled from 'styled-components';

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100px;
  border-right: 1px solid #efefef;
  background-color: #FFF;
`

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
`

export const NavItem = styled.li`
  margin-top: 1rem;
  font-size: 0.8rem;
  a {
    color: #191a1b;
    display: block;
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
    text-decoration: none;
    border-left: 5px solid transparent;

    &:hover {
      border-left: 5px solid #623cea;
      svg {
        fill: #623cea;
        opacity: 1;
      }
    }
  }
  svg {
    opacity: 0.3;
  }
` 