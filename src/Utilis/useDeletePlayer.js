import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { GET_PLAYERS } from './useQueryPlayers';

const DELETE_PLAYER = gql`
  mutation deletePlayer($id: ID!){
    deletePlayer(id: $id)
  }
`;

export default () => {
  let [deletePlayer] = useMutation(DELETE_PLAYER);

  return id => {
    return deletePlayer({
      variables: { id },
      update(cache) {
        const { players } = cache.readQuery({query: GET_PLAYERS});
        cache.writeQuery({
          query: GET_PLAYERS,
          data: {players: players.filter((player) => player.id !== id)}
        });
      }
    });
  };

}