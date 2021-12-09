import { useState } from "react";

export const LoginForm = () => {
  // from props we will take method as onFormSignUp

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onSend = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSend}>
      <p> Name</p>
      <input type="text" value={name} name="name" onChange={handleChangeName} />

      <p> Email</p>
      <input type="email" value={email} name="email" onChange={handleChangeEmail}/>
      <button type="submit">Send</button>
    </form>
  );
};
