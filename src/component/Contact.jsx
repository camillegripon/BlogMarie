import { useState } from "react";
import emailjs from "emailjs-com";
import '../style/contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [choice, setChoice] = useState("mail");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_6sr0fcb",
                "template_ssu3xt9",
                formData,
                "sOyBXxZ78-_vVLpzW"
            )
            .then(() => {
                alert("Message envoyé !");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                alert("Une erreur s'est produite. Réessayez.");
                console.error(error);
            });
    };

    return (
        <div className="choiceContact">
            <div className="choiceLogo">
                <img src="/assets/image/email_icon.png" alt="icône de mail" onClick={() => setChoice("mail")} />
                <img src="/assets/image/Instagram_icon.png" alt="logo instagram" onClick={() => setChoice("instagram")} />
            </div>
            {choice === "mail" && (
                <div className="choiceForm">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Votre email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Votre message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Envoyer</button>
                    </form>
                </div>)}
            {choice === "instagram" && (
                <div className="choiceInstagram">
                    <p>Contacter Marie via instagram</p>
                </div>)}
        </div>
    );
};

export default Contact;
