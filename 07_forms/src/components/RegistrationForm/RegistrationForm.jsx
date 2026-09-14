import { useState } from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        nickname: "",
        email: "",
        gender: "male",
        age: ""
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div style={{ border: "1px solid gray", padding: "20px", margin: "20px" }}>
            <h1>Форма реєстрації</h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
                <label>
                    Нікнейм:
                    <input
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "5px" }}
                    />
                </label>

                <label>
                    Електронна адреса:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "5px" }}
                    />
                </label>

                <label>
                    Стать:
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "5px" }}
                    >
                        <option value="male">Чоловіча</option>
                        <option value="female">Жіноча</option>
                        <option value="other">Інша</option>
                    </select>
                </label>

                <label>
                    Вік:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="1"
                        max="120"
                        style={{ width: "100%", padding: "5px" }}
                    />
                </label>

                <button type="submit" style={{ padding: "10px", cursor: "pointer", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
                    Зареєструватися
                </button>
            </form>

            {submittedData && (
                <div style={{ marginTop: "20px", padding: "10px", background: "#e8f5e9", borderRadius: "5px" }}>
                    <h3>Дані з форми:</h3>
                    <p><strong>Нікнейм:</strong> {submittedData.nickname}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Стать:</strong> {submittedData.gender === "male" ? "Чоловіча" : submittedData.gender === "female" ? "Жіноча" : "Інша"}</p>
                    <p><strong>Вік:</strong> {submittedData.age}</p>
                </div>
            )}
        </div>
    );
}

export default RegistrationForm;