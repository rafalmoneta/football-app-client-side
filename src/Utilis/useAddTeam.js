import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { GET_TEAMS } from './useQueryTeams';

export const ADD_TEAM = gql`
  mutation createTeam($newTeam: NewTeamInput!) {
    addTeam(input: $newTeam) {
      id
      name
      stadium
      about
      colours
      imageURL
    }
  }
`;

export default () => {
  let [addTeam] = useMutation(ADD_TEAM);

  return input => {
    return addTeam({
      variables: { newTeam: input },
      update(cache, {data: {addTeam}}) {
        const { teams } = cache.readQuery({ query: GET_TEAMS });
        cache.writeQuery({
          query: GET_TEAMS,
          data: {teams: [addTeam, ...teams]}
        });
      },
    });
  };
};