import * as React from "react";

interface EmailTemplateProps {
  imageURl: string;
}

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  imageURl,
}) => (
  <div>
    <h1>Here is your image</h1>
    <img src={imageURl} alt="image" />
  </div>
);

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ name, email, message }) => (
  <div
    style={{
      border: "2px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "600px",
      margin: "auto",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <h1 style={{ color: "#333", textAlign: "center" }}>
      You got a message from Contact Form
    </h1>
    <h2 style={{ color: "#555" }}>Name: {name}</h2>
    <h2 style={{ color: "#555" }}>Email: {email}</h2>
    <h2 style={{ color: "#555" }}>Message: {message}</h2>
  </div>
);
