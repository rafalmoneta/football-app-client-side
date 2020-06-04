import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminPanel = styled.div`
  position: relative;
  z-index: 1;
`

export const AdminNavigation = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
`

export const AdminLink = styled(Link)`
  display: block;
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  border: 1px solid #efefef;
  font-size: 1.5rem;
  margin-right: 2rem;
  text-decoration: none;
  color: #111111;

  &:last-child {
    margin: 0;
  }
`

export const AdminPanelContent = styled.div`
  display: block;
  margin-top: 2rem;
`