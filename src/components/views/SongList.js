import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getSongsQuery } from "../../queries/queries";

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displaySongs() {
    let data = this.props.data;
    const { rangeFilter } = this.props;
    if (data.loading) {
      return <div className="load-song-list">Loading Songs</div>;
    } else if (data.songs) {
      return data.songs
        .filter(song => song.year.startsWith(rangeFilter))
        .map(song => (
          <div
            className="song-row"
            key={song.id}
            onClick={() => this.props.onSelectSong(song.id)}
          >
            {song.name} ({song.year})
          </div>
        ));
    } else {
      return <div className="load-song-list">Server disconnected</div>;
    }
  }
  render() {
    return (
      <div className="paper">
        {/* <div className=""> */}
        {this.displaySongs()}
        {/* </div> */}
      </div>
    );
  }
}

export default graphql(getSongsQuery)(SongList);
