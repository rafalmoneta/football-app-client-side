import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const GET_PLAYERS_AND_TEAMS = gql`
  query players {
    players {
      id
      name
      bornAt
      number
      position
      imageURL
    }
    teams {
      id
      name
    }
  }
`;

export default () => {
  return useQuery(GET_PLAYERS_AND_TEAMS);
};