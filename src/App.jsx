import { useState } from "react";
import PasswordInput from "./Component/PasswordInput";

const App = () => {
  const [password, setPassword] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container h-screen flex justify-center items-center">
      <PasswordInput value={password} onChange={handlePassChange} />
    </div>
  );
};

export default App;
