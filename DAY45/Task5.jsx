 import React, { useState } from "react";

const PasswordMatch = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmChange = (e) => setConfirmPassword(e.target.value);

  const isMatch = password === confirmPassword && password !== "";

  return (
    <div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmChange}
          />
        </label>
      </div>
      <p style={{ color: isMatch ? "green" : "red" }}>
        {confirmPassword
          ? isMatch
            ? "Passwords match ✅"
            : "Passwords do not match ❌"
          : ""}
      </p>
    </div>
  );
};

export default PasswordMatch;