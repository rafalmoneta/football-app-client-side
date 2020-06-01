import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { GET_TEAMS } from './useQueryTeams';

export const DELETE_TEAM = gql`
  mutation deleteTeam($id: ID!) {
    deleteTeam(id: $id)
  }
`;

export default () => {
  let [deleteTeam] = useMutation(DELETE_TEAM);

  return id => {
    return deleteTeam({
      variables: { id },
      update(cache, {data: {deleteTeam}}) {
        const { teams } = cache.readQuery({ query: GET_TEAMS });
        cache.writeQuery({
          query: GET_TEAMS,
          data: {teams: teams.filter(team => team.id !== id)}
        });
      },
    });
  };
};