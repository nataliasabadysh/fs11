import { useForm } from "../hooks/useForm";

export const LoginForm = () => {
    const { form, handleChange } = useForm({name: ""});

    const onSend = (e) => {
        e.preventDefault();
        console.log('Send LoginForm', form)
    }
    const { name } = form;

    return <form onSubmit={onSend}>
            <input
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
                placeholder="name"
                />
            <button type="submit">Send</button>
        </form>
};