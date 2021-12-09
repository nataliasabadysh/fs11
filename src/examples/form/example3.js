// useCustomHook - for the business logic

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value, // вычисляемые свойства объекта js OR динамическое формирования имени объекта js
    }));
  };

  return { handleChange, form };
};



const Component = () => {

  const { form, handleChange } = useForm({
    name: "",
    email: "",
  });

  const { name, email } = form;

  return <></>;
};
