function CarCard({ car, onEdit, onDelete }) {
    function colorDot(color) {
        const map = {
            "Чорний": "#000",
            "Білий": "#fff",
            "Синій": "#1a73e8",
            "Червоний": "#cc0000",
            "Сріблястий": "#c0c0c0",
            "Сірий": "#808080",
            "Зелений": "#008000",
            "Жовтий": "#ffcc00",
        };
        return map[color] || "#aaa";
    }

    function imageError(e) {
        e.target.src = "https://via.placeholder.com/400x250/333/fff?text=Car";
    }

    return (
        <div
            style={{
                border: "1px solid gray",
                borderRadius: "12px",
                width: "300px",
                overflow: "hidden",
                textAlign: "start",
                backgroundColor: "#1e1e1e",
            }}
        >
            <img
                src={car.image}
                alt={car.name}
                onError={imageError}
                style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    display: "block",
                }}
            />

            <div style={{ padding: "16px" }}>
                <h3 style={{ marginTop: 0 }}>{car.name}</h3>
                <p><b>Виробник:</b> {car.manufacturer}</p>
                <p><b>Рік:</b> {car.year}</p>
                <p><b>Об'єм:</b> {car.volume === 0 ? "Електро" : `${car.volume} л`}</p>
                <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <b>Колір:</b>
                    <span
                        style={{
                            display: "inline-block",
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            backgroundColor: colorDot(car.color),
                            border: "1px solid gray",
                        }}
                    />
                    {car.color}
                </p>
                <p style={{ color: "gold" }}><b>Ціна:</b> ${car.price}</p>
                <p style={{ fontSize: "0.9em", opacity: 0.85 }}>{car.description}</p>

                <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                    <button
                        onClick={() => onEdit(car)}
                        style={{
                            flex: 1,
                            padding: "6px",
                            backgroundColor: "purple",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}
                    >
                        Редагувати
                    </button>
                    <button
                        onClick={() => onDelete(car.id)}
                        style={{
                            flex: 1,
                            padding: "6px",
                            backgroundColor: "darkred",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}
                    >
                        Видалити
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CarCard;