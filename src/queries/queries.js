import { gql } from "apollo-boost";

const getSongsQuery = gql`
  {
    songs {
      name
      id
      year
    }
  }
`;

const getSongQuery = gql`
  query($id: ID) {
    song(id: $id) {
      id
      name
      year
      composer
      lyrics
      verse
      link
      singer {
        id
        name
        age
        songs {
          name
          id
        }
      }
    }
  }
`;

const getSingersQuery = gql`
  {
    singers {
      name
      id
    }
  }
`;

const addSingerMutation = gql`
  mutation AddSinger($name: String!, $age: Int!) {
    addSinger(name: $name, age: $age) {
      name
      id
    }
  }
`;

const deleteSingerMutation = gql`
  mutation DeleteSingerMutation($id: ID!) {
    deleteSinger(id: $id) {
      name
    }
  }
`;

const addSongMutation = gql`
  mutation AddSong(
    $name: String!
    $year: String!
    $composer: String!
    $singerId: [String]!
    $lyrics: String!
    $verse: String!
    $link: String!
  ) {
    addSong(
      name: $name
      year: $year
      composer: $composer
      singerId: $singerId
      lyrics: $lyrics
      verse: $verse
      link: $link
    ) {
      name
      year
    }
  }
`;

const updateSongMutation = gql`
  mutation UpdateSongMutation(
    $id: ID!
    $name: String!
    $year: String!
    $composer: String!
    $singerId: [String]!
    $lyrics: String!
    $verse: String!
    $link: String!
  ) {
    updateSong(
      id: $id
      name: $name
      year: $year
      composer: $composer
      singerId: $singerId
      lyrics: $lyrics
      verse: $verse
      link: $link
    ) {
      id
      name
      year
    }
  }
`;

const deleteSongMutation = gql`
  mutation DeleteSongMutation($id: ID!) {
    deleteSong(id: $id) {
      name
    }
  }
`;

export {
  getSongsQuery,
  getSongQuery,
  getSingersQuery,
  addSingerMutation,
  addSongMutation,
  updateSongMutation,
  deleteSingerMutation,
  deleteSongMutation
};
