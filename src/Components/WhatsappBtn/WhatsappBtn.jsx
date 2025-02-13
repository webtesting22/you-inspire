import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "+919824002125"; // Replace with your WhatsApp number

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp size={20} />
        </a>
    );
};

export default WhatsAppButton;
