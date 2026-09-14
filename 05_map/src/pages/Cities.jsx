import CityCard from "../components/CityCard";
import cities from "../data/cities.json";

function Cities() {
    return (
        <>
            <h1>Міста країни</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
                {cities.map((city) => (
                    <CityCard key={city.id} city={city} />
                ))}
            </div>
        </>
    );
}

export default Cities;