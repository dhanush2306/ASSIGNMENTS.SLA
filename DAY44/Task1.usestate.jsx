import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Logged In" : "Guest"}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Status
      </button>
    </div>
  );
}

export default LoginStatus;