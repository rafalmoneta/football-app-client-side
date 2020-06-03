import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const GET_PLAYERS = gql`
  query players {
    players {
      id
      name
      bornAt
      number
      position
      imageURL
    }
  }
`;

export default () => {
  return useQuery(GET_PLAYERS);
};