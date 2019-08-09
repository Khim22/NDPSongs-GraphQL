import React, { Component } from "react";
import { graphql, Query } from "react-apollo";
import { CSSTransition } from "react-transition-group";

import { getSongQuery } from "../../queries/queries";

class SongDetail extends Component {
  render() {
    return (
      <>
        <Query query={getSongQuery} variables={{ id: this.props.songId }}>
          {({ data, loading, error }) => {
            let l = loading;
            let className = "song-details";
            const { song } = data;

            return song ? (
              <CSSTransition in={!l} classNames="song-details">
                <div id={song.name} className={className}>
                  <div className="close-button-container">
                    <button
                      className="hollow-button close-button"
                      type="button"
                      onClick={this.props.onClose}
                    >
                      <span>Close</span>
                    </button>
                  </div>

                  <h4 className="song-name">{song.name}</h4>
                  <div
                    className="video"
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%" /* 16:9 */,
                      paddingTop: 25,
                      height: 0,
                      alignItems: "center"
                    }}
                  >
                    <iframe
                      title={song.name}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "80%"
                      }}
                      src={`https://www.youtube.com/embed/${
                        song.link.split("=")[1]
                      }`}
                      frameBorder="0"
                    />
                  </div>
                  <h4>
                    <b className="bold-prefix">Lyrics:</b> {song.lyrics}
                  </h4>
                  <h4>
                    <b>Music:</b> {song.composer}
                  </h4>
                  <h4>
                    <b>Verse:</b>
                  </h4>
                  <h4 style={{ whiteSpace: "pre-wrap" }}>{song.verse}</h4>
                  <h4>
                    <b>Singers:</b>
                  </h4>

                  {song.singer.map(singer => (
                    <div key={singer.id}>
                      <h4>{singer.name}</h4>
                    </div>
                  ))}
                </div>
              </CSSTransition>
            ) : (
              <h2 className="song-name">Loading Song details....</h2>
            );
          }}
        </Query>
      </>
    );
  }
}

export default graphql(getSongQuery, {
  options: props => {
    return {
      variables: {
        id: props.songId
      }
    };
  }
})(SongDetail);
