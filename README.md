# Show & Hide Password

![ScreenRecording2025-02-10at6 19 53PM-ezgif com-crop](https://github.com/user-attachments/assets/fbf2d9d0-c928-48d8-be44-43853a4d1766)


**Logic:**

- Using isShowPassword state will toggle the type of input tag.
- `type={isShowPassword ? "text" : "password"}`
- toggleShowPassword will update `isShowPassword` state.

- **PasswordInput.jsx**

```jsx
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  **const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };**

  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        value={value}
        onChange={onChange}
        **type={isShowPassword ? "text" : "password"}**
        placeholder={"Enter Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />

      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="text-[#2B85FF] cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-slate-400 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

export default PasswordInput;

```

- App.jsx

```jsx
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
```
