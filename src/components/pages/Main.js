import React, { useState } from "react";
import SongList from "../views/SongList";
import SongDetails from "../views/SongDetails";
import FilterButtons from "../views/FilterButtons";

const Main = props => {
  const [selected, setSelected] = useState(null);
  const [yearRange, setYearRange] = useState("");
  const [initLoad, setInitLoad] = useState(true);
  return (
    <div className="App">
      <div className="main">
        <h1 className="App-title">NDP Songs</h1>
        <FilterButtons yearFilter={setYearRange} />
        <div className="bulk">
          <SongList onSelectSong={setSelected} rangeFilter={yearRange} />
          {selected ? (
            <div className={selected ? "details-expand" : "details"}>
              <SongDetails
                songId={selected}
                onClose={() => {
                  setSelected("");
                  setInitLoad(false);
                }}
              />
            </div>
          ) : !selected && initLoad ? (
            <div id="empty-details" />
          ) : (
            <div id="empty-details" className="details" />
          )}
        </div>
        <div className="footer">
          Disclaimer: I do not own any part of the lyrics, music or any
          materials of the songs.
          <div>
            All songs and information are from retrieved from sources around the
            internet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
