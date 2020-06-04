import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { GET_PLAYERS } from "./useQueryPlayers";

export const ADD_PLAYER = gql`
  mutation addPlayer($newPlayer: NewPlayerInput!) {
    addPlayer(input: $newPlayer){
      id
      name
      position
      number
      bornAt
      imageURL
    }
  }
`

export default () => {
  let [addPlayer] = useMutation(ADD_PLAYER);

  return input => {
    return addPlayer({
      variables: { newPlayer: input },
      update(cache, {data: {addPlayer}}) {
        const { players } = cache.readQuery({ query: GET_PLAYERS });
        cache.writeQuery({
          query: GET_PLAYERS,
          data: {players: [addPlayer, ...players]}
        });
      },
    });
  };
};