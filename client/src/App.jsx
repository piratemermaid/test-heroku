import React from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    async function testApi() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/users`
        );
        setUsers(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    testApi();
  }, []);

  return (
    <>
      <h1>Test Heroku!</h1>
      {users && (
        <ul>
          {users.map((user) => {
            return (
              <li>
                <h3>{user.username}</h3>
                <p>{user.email}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;
