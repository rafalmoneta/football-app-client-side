import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const GET_PLAYERS = gql`
  query teams {
    teams {
      id
      name
      imageURL
    }
  }
`;

export default () => {
  return useQuery(GET_TEAMS);
};