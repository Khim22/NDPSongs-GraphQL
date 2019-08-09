import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getSingersQuery } from "../../queries/queries";
import { ListAdmin } from "./ListAdmin";

const getSingers = graphql(getSingersQuery);

const mapSingersToRows = (data, setDisplayed) => {
  if (!data.loading) {
    return data.singers.map(singer => (
      <tr key={singer.id}>
        <td>{singer.name}</td>
        <td> {singer.id}</td>
        <td>
          <button onClick={() => setDisplayed(true)}>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    ));
  }
};

const SingerListAdmin = props => {
  const { data } = props;
  const [isDisplayed, setDisplayed] = useState(false);
  if (!data.loading) {
    return (
      <ListAdmin
        typeName={"Singer List"}
        columns={[{ "Singer Name": "name" }, { "Singer Id": "id" }]}
        data={data.singers}
      >
        {mapSingersToRows(data, setDisplayed)}
      </ListAdmin>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default getSingers(SingerListAdmin);
