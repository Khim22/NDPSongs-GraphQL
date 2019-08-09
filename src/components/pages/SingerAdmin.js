import React from "react";
import { AddSinger } from "../views/AddSinger";
import SingerListAdmin from "../views/SingerListAdmin";

const SingerAdmin = props => {
  return (
    <div>
      <SingerListAdmin />
      <AddSinger />
    </div>
  );
};

export default SingerAdmin;
