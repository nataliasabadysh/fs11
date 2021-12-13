import { useState } from "react";

// Custom Hook 
export const useForm = (formState) => {
    const [form, setForm] = useState(formState);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prevState) =>{
        return {
            ...prevState,
            [name]: value,
        }});
    };
    
    return { form, handleChange }
} 