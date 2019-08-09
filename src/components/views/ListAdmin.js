import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { deleteSingerMutation } from "../../queries/queries";

export const ListAdmin = props => {
  const [isDisplayed, setDisplayed] = useState(false);
  const [selected, setSelected] = useState(null);
  const [action, setAction] = useState(null);
  const { typeName, columns, data } = props;

  const columnNames = columns.map(col => Object.keys(col)).flat();
  const keys = columns.map(col => Object.values(col)).flat();

  const rowEditAction = (id, action) => {
    setSelected(id);
    setDisplayed(true);
    setAction(action);
  };

  return (
    <div>
      <h2>{typeName}</h2>
      <table>
        <tbody>
          <tr className="paperRow">
            {columnNames.map(colName => (
              <td key={colName}> {colName}</td>
            ))}
          </tr>
          {data.map(dataRow => (
            <DataRow
              {...props}
              keys={keys}
              data={dataRow}
              editAction={rowEditAction}
              deleteAction={setDisplayed}
            />
          ))}
        </tbody>
      </table>
      <Modal
        selected={selected}
        isDisplayed={isDisplayed}
        setDisplayed={setDisplayed}
        mutation={action}
      />
    </div>
  );
};

const DataRow = props => {
  const { keys, data, editAction } = props;
  return (
    <tr key={data[keys[0]]}>
      {keys.map(key => (
        <>
          <td key={key}>{data[key]}</td>
        </>
      ))}
      <td>
        <button onClick={() => editAction("edit")}>Edit</button>
      </td>
      <td>
        <button onClick={() => editAction(data.id, deleteSingerMutation)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export const Modal = props => {
  const { selected, isDisplayed, setDisplayed, mutation } = props;
  return (
    <div
      className="modal-background"
      style={{ display: isDisplayed ? "" : "none" }}
    >
      <div className="modal">
        <header>Title</header>
        Modal Children
        <footer>
          <button onClick={() => setDisplayed(false)}>Cancel</button>
          {mutation ? (
            <Mutation mutation={mutation} variables={{ selected }}>
              {confirm => <button onClick={confirm}>Confirm</button>}
            </Mutation>
          ) : (
            <button>Loading</button>
          )}
        </footer>
      </div>
    </div>
  );
};
