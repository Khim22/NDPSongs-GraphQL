import React from "react";
import SingerList from "../views/SingerList";
import SongList from "../views/SongList";
import AddSong from "../views/AddSong";

const SongAdmin = props => {
  return (
    <div>
      <SingerList />
      <SongList/>
      <AddSong/>
    </div>
  );
};

export default SongAdmin;