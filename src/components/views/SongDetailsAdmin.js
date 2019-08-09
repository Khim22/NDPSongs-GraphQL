import React from "react";
import { graphql } from "react-apollo";
import { getSongsQuery } from "../../queries/queries";
import { ListAdmin } from "./ListAdmin";
import EditSong from "./EditSong";
import { deleteSongMutation } from "../../queries/queries";

const getSongs = graphql(getSongsQuery);

const SongDetailsAdmin = props => {
  const { data } = props;
  if (!data.loading) {
    return (
      <>
        <ListAdmin
          typeName={"Song List"}
          columns={[{ "Song Name": "name" }, { "Song Id": "id" }]}
          data={data.songs}
          deleteMutation={deleteSongMutation}
        />
        <EditSong />
      </>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default getSongs(SongDetailsAdmin);
