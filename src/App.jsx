import { useState } from "react";

function App() {
  const [user,setUser] = useState(null);

  const getUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setUser(data.results[0]);
  };

  return (
    <div className="main">
      {user && (
        <div className="content">
          <img src={user.picture.large}/>
          <h2>{user.name.first} {user.name.last}</h2>
          <p>{user.email}</p>
          <h1>This is a demo of REST API</h1>
        </div>
      )}
      <button onClick={getUser}>Get User</button>
    </div>
  );
}

export default App;