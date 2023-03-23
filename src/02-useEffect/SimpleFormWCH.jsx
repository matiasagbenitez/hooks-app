import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleFormWCH = () => {

  const { username, email, password, formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

  const resetForm = () => {
    onResetForm();
  }

  return (
    <div>
      <h1>SimpleForm con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={resetForm} className="btn btn-secondary mt-2">
        Limpiar campos
      </button>

    </div>
  );
};
