import { useState } from "react";

function PhoneBook() {
    const [contacts, setContacts] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setContacts([
            ...contacts,
            { ...formData, id: Date.now() }
        ]);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        });
    };

    const handleDelete = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    return (
        <div style={{ border: "1px solid gray", padding: "20px", margin: "20px" }}>
            <h1>Телефонна книга</h1>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Ім'я"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    style={{ padding: "5px" }}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Прізвище"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    style={{ padding: "5px" }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Електронна адреса"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ padding: "5px" }}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{ padding: "5px" }}
                />
                <button type="submit" style={{ padding: "10px", cursor: "pointer", background: "#2196F3", color: "white", border: "none", borderRadius: "5px" }}>
                    Додати контакт
                </button>
            </form>

            <h2 style={{ marginTop: "30px" }}>Список контактів ({contacts.length})</h2>
            {contacts.length === 0 ? (
                <p>Контактів поки немає. Додайте перший!</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {contacts.map((contact) => (
                        <li key={contact.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <strong>{contact.firstName} {contact.lastName}</strong>
                                <p style={{ margin: "5px 0" }}>📧 {contact.email}</p>
                                <p style={{ margin: "5px 0" }}>📞 {contact.phone}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(contact.id)}
                                style={{ background: "#f44336", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
                            >
                                Видалити
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PhoneBook;