import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TeamBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border: 1px solid #dadada;
  border-radius: 0.75rem;
  box-sizing: border-box;
  text-align: center;
`

export const TeamBoxImage = styled.div`
  width: 13rem;
  height: auto;
  margin: 0 auto;
  img {
    width: 100%;
  }
`

export const TeamBoxButtons = styled.div`
  display: flex;
`

export const TeamBoxLink = styled(NavLink)`
  display: block;
  flex: 5;
  padding: 0.75rem 1rem;
  margin-right: 0.75rem;
  text-decoration: none;
  color: #FFF;
  background-color: #623cea;
  border-radius: 0.5rem;
`

export const TeamBoxButton = styled.button`
  flex: 1;
  padding: 0.75rem 1rem;
  background-color: #f4f5f6;
  border-radius: 0.5rem;
  border: none;
  margin-right: 0.75rem;
`