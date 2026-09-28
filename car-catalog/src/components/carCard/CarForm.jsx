import { useState, useEffect } from "react";

const emptyCar = {
    name: "",
    manufacturer: "",
    year: new Date().getFullYear(),
    volume: 0,
    price: 0,
    color: "Чорний",
    description: "",
};

const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
    margin: "12px 0",
};

function CarForm({ car, onSave, onCancel }) {
    const [formData, setFormData] = useState(emptyCar);

    useEffect(() => {
        if (car) {
            setFormData(car);
        } else {
            setFormData(emptyCar);
        }
    }, [car]);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!formData.name || !formData.manufacturer) {
            alert("Заповніть назву та виробника");
            return;
        }

        onSave({
            ...formData,
            year: Number(formData.year),
            volume: Number(formData.volume),
            price: Number(formData.price),
        });
    }

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                padding: "20px",
                overflowY: "auto",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: "#1e1e1e",
                    padding: "32px",
                    borderRadius: "12px",
                    width: "500px",
                    maxWidth: "100%",
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                <h2 style={{ marginTop: 0 }}>
                    {car ? "Редагувати авто" : "Додати авто"}
                </h2>

                <div style={inputGroupStyle}>
                    <label>Назва *</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="BMW M5"
                        style={{ fontSize: "1em", padding: "6px" }}
                    />
                </div>

                <div style={inputGroupStyle}>
                    <label>Виробник *</label>
                    <input
                        name="manufacturer"
                        value={formData.manufacturer}
                        onChange={handleChange}
                        placeholder="BMW"
                        style={{ fontSize: "1em", padding: "6px" }}
                    />
                </div>

                <div style={inputGroupStyle}>
                    <label>Рік випуску</label>
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        style={{ fontSize: "1em", padding: "6px" }}
                    />
                </div>

                <div style={inputGroupStyle}>
                    <label>Об'єм (л, 0 — електро)</label>
                    <input
                        type="number"
                        step="0.1"
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        style={{ fontSize: "1em", padding: "6px" }}
                    />
                </div>

                <div style={inputGroupStyle}>
                    <label>Ціна ($)</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        style={{ fontSize: "1em", padding: "6px" }}
                    />
                </div>

                <div style={inputGroupStyle}>
                    <label>Колір</label>
                    <select
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        style={{ fontSize: "1em", padding: "6px" }}
                    >
                        <option value="Чорний">Чорний</option>
                        <option value="Білий">Білий</option>
                        <option value="Синій">Синій</option>
                        <option value="Червоний">Червоний</option>
                        <option value="Сріблястий">Сріблястий</option>
                        <option value="Сірий">Сірий</option>
                        <option value="Зелений">Зелений</option>
                        <option value="Жовтий">Жовтий</option>
                    </select>
                </div>

                <div style={inputGroupStyle}>
                    <label>Опис</label>
                    <input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Короткий опис"
                        style={{ fontSize: "1em", padding: "6px" }}
                    />
                </div>

                <div
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        gap: "10px",
                    }}
                >
                    <button
                        type="button"
                        onClick={onCancel}
                        style={{
                            flex: 1,
                            padding: "10px",
                            backgroundColor: "gray",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "1em",
                        }}
                    >
                        Скасувати
                    </button>
                    <button
                        type="submit"
                        style={{
                            flex: 1,
                            padding: "10px",
                            backgroundColor: "purple",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "1em",
                        }}
                    >
                        {car ? "Зберегти" : "Додати"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CarForm;