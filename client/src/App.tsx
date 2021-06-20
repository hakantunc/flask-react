import React from "react";

type Data = {
  name: string;
  age: number;
};

type ActionResponse = {
  data: Data[];
};

function App() {
  const [state, setState] = React.useState<ActionResponse>({ data: [] });

  React.useEffect(() => {
    fetch("http://localhost:5000/action")
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const tableRows = state.data.map(({ name, age }) => {
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{age}</td>
      </tr>
    );
  });

  return (
    <div>
      <p>Hello there</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default App;
