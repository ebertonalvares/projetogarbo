import { useState } from "react";
import "./styles.css";


export default function Contato() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o formulário
        console.log(form);
    };

    return (
        <section id="contact">
            <div id="container">
                <div id="card">

                    <span id="call-to-action">Saiba Mais</span>


                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" value={form.name} onChange={handleChange} />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
                        <label htmlFor="message">Mensagem:</label>
                        <textarea name="message"id="message" value={form.message} onChange={handleChange} />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section>

    );
}
