import { useState } from "react";
import CarCard from "../../components/carCard/CarCard";
import CarForm from "../../components/carCard/CarForm";
import carsInitial from "./../../carsData.json";

const selectStyle = {
    fontSize: "1em",
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid gray",
};

function Cars() {
    const [cars, setCars] = useState(carsInitial);
    const [editingCar, setEditingCar] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const [filters, setFilters] = useState({
        manufacturer: "",
        year: "",
        color: "",
        volume: "",
        priceMin: "",
        priceMax: "",
    });

    const manufacturers = [...new Set(cars.map((c) => c.manufacturer))];
    const years = [...new Set(cars.map((c) => c.year))].sort((a, b) => b - a);
    const colors = [...new Set(cars.map((c) => c.color))];
    const volumes = [...new Set(cars.map((c) => c.volume))].sort((a, b) => a - b);

    const filtered = cars.filter((c) => {
        if (filters.manufacturer && c.manufacturer !== filters.manufacturer) return false;
        if (filters.year && c.year !== Number(filters.year)) return false;
        if (filters.color && c.color !== filters.color) return false;
        if (filters.volume !== "" && c.volume !== Number(filters.volume)) return false;
        if (filters.priceMin && c.price < Number(filters.priceMin)) return false;
        if (filters.priceMax && c.price > Number(filters.priceMax)) return false;
        return true;
    });

    function changeFilter(e) {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    }

    function resetFilters() {
        setFilters({
            manufacturer: "",
            year: "",
            color: "",
            volume: "",
            priceMin: "",
            priceMax: "",
        });
    }

    function addCar(carData) {
        const newCar = { ...carData, id: Date.now() };
        setCars([...cars, newCar]);
        setShowForm(false);
    }

    function updateCar(updatedCar) {
        setCars(cars.map((c) => (c.id === updatedCar.id ? updatedCar : c)));
        setEditingCar(null);
        setShowForm(false);
    }

    function deleteCar(id) {
        if (window.confirm("Видалити це авто?")) {
            setCars(cars.filter((c) => c.id !== id));
        }
    }

    function startEdit(car) {
        setEditingCar(car);
        setShowForm(true);
    }

    function closeForm() {
        setEditingCar(null);
        setShowForm(false);
    }

    return (
        <>
            <h1>Автомобільний каталог</h1>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                <button
                    onClick={() => {
                        setEditingCar(null);
                        setShowForm(true);
                    }}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "purple",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "1em",
                    }}
                >
                    + Додати авто
                </button>
            </div>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    padding: "16px 20px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <select name="manufacturer" value={filters.manufacturer} onChange={changeFilter} style={selectStyle}>
                    <option value="">Всі виробники</option>
                    {manufacturers.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>

                <select name="year" value={filters.year} onChange={changeFilter} style={selectStyle}>
                    <option value="">Всі роки</option>
                    {years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>

                <select name="color" value={filters.color} onChange={changeFilter} style={selectStyle}>
                    <option value="">Всі кольори</option>
                    {colors.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>

                <select name="volume" value={filters.volume} onChange={changeFilter} style={selectStyle}>
                    <option value="">Всі об'єми</option>
                    {volumes.map((v) => (
                        <option key={v} value={v}>{v === 0 ? "Електро" : `${v} л`}</option>
                    ))}
                </select>

                <input type="number" name="priceMin" placeholder="Ціна від" value={filters.priceMin} onChange={changeFilter} style={selectStyle} />
                <input type="number" name="priceMax" placeholder="Ціна до" value={filters.priceMax} onChange={changeFilter} style={selectStyle} />

                <button
                    onClick={resetFilters}
                    style={{
                        padding: "6px 14px",
                        backgroundColor: "gray",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Скинути
                </button>
            </div>

            <h3 style={{ textAlign: "center" }}>
                Знайдено: {filtered.length} з {cars.length}
            </h3>

            {showForm && (
                <CarForm
                    car={editingCar}
                    onSave={editingCar ? updateCar : addCar}
                    onCancel={closeForm}
                />
            )}

            {filtered.length > 0 ? (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        padding: "20px",
                        justifyContent: "center",
                    }}
                >
                    {filtered.map((car) => (
                        <CarCard
                            key={car.id}
                            car={car}
                            onEdit={startEdit}
                            onDelete={deleteCar}
                        />
                    ))}
                </div>
            ) : (
                <h2 style={{ textAlign: "center" }}>Автомобілів не знайдено</h2>
            )}
        </>
    );
}

export default Cars;