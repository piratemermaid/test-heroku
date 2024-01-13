import React from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    async function testApi() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api`,
        );
        setMessage(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    testApi();
  }, []);

  return (
    <>
      <h1>Test Heroku!</h1>
      {message && <p>{message}</p>}
    </>
  );
}

export default App;
