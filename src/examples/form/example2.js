import { useState } from "react";

// Example with atribute "name"
const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const initState = {
  name: "",
  email: "",
  password: '',
  age:'',
  agreed: false,
  gender: Gender.MALE,
  location: "Kiev"
}

export const LoginFormExample = () => {
  // from props we will take method as onFormSignUp
  const [form, setForm] = useState(initState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prevState) =>{
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value, // вычисляемые свойства объекта js /динамическое формирования имени объекта js
      }});
  };

  const onSend = (e) => {
    e.preventDefault();
    console.log('Send')
  };

  return (
    <form onSubmit={onSend}>
      <input
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="password"
        value={form.password}
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <input
        type="number"
        value={form.age}
        name="age"
        onChange={handleChange}
        placeholder="age"
      />
      <input
        type="email"
        value={form.email}
        name="email"
        onChange={handleChange}
        placeholder="email"
      />

        <select value={form.location} onChange={handleChange} name="location">            
            <option value="Kiev">Kiev</option>
            <option value="Kharkiv">Kharkiv</option>
            <option value="Lviv">Lviv</option>
        </select>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={form.gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={form.gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={handleChange}
            />
          </label>
        </section>

        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={form.agreed}
            onChange={handleChange}
            name="agreed"
          />
        </label>

      <button type="submit">Send</button>
    </form>
  );
};
