import { useForm } from "../hooks/useForm";

export const RegistrationForm = () => {
    const { form, handleChange } = useForm({
        name: "",
        email: ""
    });

    const onSend = (e) => {
        e.preventDefault();
        console.log('Send RegistrationForm', form)
    };

    const { name, email } = form;

    return (
        <form onSubmit={onSend}>
        <input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            placeholder="name"
        />
        <input
            type="eamil"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="name"
            />
        <br/>
        <button type="submit">Send</button>
        </form>
    );
};