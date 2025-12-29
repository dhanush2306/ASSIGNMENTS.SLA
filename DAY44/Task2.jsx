import { useState } from "react";

function PremiumButton() {
  const [isPremiumUser, setIsPremiumUser] = useState(true);

  return (
    <div>
      {isPremiumUser && <button>Premium Feature</button>}
      <button onClick={() => setIsPremiumUser(!isPremiumUser)}>
        Toggle User
      </button>
    </div>
  );
}

export default PremiumButton;