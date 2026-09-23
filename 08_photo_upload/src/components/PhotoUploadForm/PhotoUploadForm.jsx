import { useState, useRef } from "react";

function PhotoUploadForm() {
    const [formData, setFormData] = useState({
        nickname: "",
        password: "",
        email: "",
        description: "",
        tags: ""
    });
    const [photo, setPhoto] = useState(null);
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "Електронна адреса обов'язкова";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Неправильний формат пошти";
        }

        if (!formData.password) {
            newErrors.password = "Пароль обов'язковий";
        } else if (formData.password.length < 6) {
            newErrors.password = "Пароль має бути мінімум 6 символів";
        } else if (formData.password.length > 32) {
            newErrors.password = "Пароль має бути максимум 32 символи";
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
            newErrors.password = "Пароль повинен містити цифру, велику та маленьку літеру";
        }

        if (!formData.nickname) {
            newErrors.nickname = "Нікнейм обов'язковий";
        } else if (formData.nickname.length < 5) {
            newErrors.nickname = "Нікнейм має бути мінімум 5 символів";
        } else if (formData.nickname.length > 16) {
            newErrors.nickname = "Нікнейм має бути максимум 16 символів";
        }

        if (!photo) {
            newErrors.photo = "Фотографія обов'язкова";
        } else if (!photo.type.startsWith("image/")) {
            newErrors.photo = "Файл повинен бути зображенням";
        }

        if (formData.description.length > 200) {
            newErrors.description = "Опис не може перевищувати 200 символів";
        }

        const tagsArray = formData.tags.split(",").map(t => t.trim()).filter(t => t !== "");
        if (tagsArray.length === 0) {
            newErrors.tags = "Потрібно додати хоча б один тег";
        } else if (!tagsArray.every(tag => tag.startsWith("#"))) {
            newErrors.tags = "Кожен тег повинен починатися з #";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSubmittedData({
                ...formData,
                photoName: photo ? photo.name : "Немає",
                tags: formData.tags.split(",").map(t => t.trim())
            });
        } else {
            setSubmittedData(null);
        }
    };

    const handleReset = () => {
        setFormData({ nickname: "", password: "", email: "", description: "", tags: "" });
        setPhoto(null);
        setErrors({});
        setSubmittedData(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div style={{ border: "1px solid gray", padding: "20px", margin: "20px", maxWidth: "500px" }}>
            <h1>Завантаження фотографії</h1>

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label>
                    Нікнейм:
                    <input
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "6px" }}
                    />
                </label>
                {errors.nickname && <span style={{ color: "red", fontSize: "0.9em" }}>{errors.nickname}</span>}

                <label>
                    Пароль:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "6px" }}
                    />
                </label>
                {errors.password && <span style={{ color: "red", fontSize: "0.9em" }}>{errors.password}</span>}

                <label>
                    Електронна адреса:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "6px" }}
                    />
                </label>
                {errors.email && <span style={{ color: "red", fontSize: "0.9em" }}>{errors.email}</span>}

                <label>
                    Фотографія:
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ width: "100%", padding: "6px" }}
                    />
                </label>
                {errors.photo && <span style={{ color: "red", fontSize: "0.9em" }}>{errors.photo}</span>}

                <label>
                    Опис фотографії:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        maxLength={200}
                        rows={3}
                        style={{ width: "100%", padding: "6px" }}
                    />
                </label>
                <span style={{ fontSize: "0.8em", color: "gray" }}>
                    {formData.description.length}/200 символів
                </span>
                {errors.description && <span style={{ color: "red", fontSize: "0.9em" }}>{errors.description}</span>}

                <label>
                    Теги (через кому, кожен з #):
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="#природа, #подорож, #літо"
                        style={{ width: "100%", padding: "6px" }}
                    />
                </label>
                {errors.tags && <span style={{ color: "red", fontSize: "0.9em" }}>{errors.tags}</span>}

                <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit" style={{ padding: "10px", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Завантажити
                    </button>
                    <button type="button" onClick={handleReset} style={{ padding: "10px", background: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Очистити
                    </button>
                </div>
            </form>

            {submittedData && (
                <div style={{ marginTop: "20px", padding: "15px", background: "#e8f5e9", borderRadius: "5px" }}>
                    <h3>Дані успішно відправлено!</h3>
                    <p><strong>Нікнейм:</strong> {submittedData.nickname}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Опис:</strong> {submittedData.description || "—"}</p>
                    <p><strong>Теги:</strong> {submittedData.tags.join(", ")}</p>
                    <p><strong>Файл:</strong> {submittedData.photoName}</p>
                </div>
            )}
        </div>
    );
}

export default PhotoUploadForm;