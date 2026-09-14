function CityCard({ city }) {
    return (
        <div style={{ border: "1px solid gray", padding: "15px", width: "250px", textAlign: "center" }}>
            <img src={city.coat_of_arms} alt={`Герб міста ${city.city}`} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
            <h3>{city.city}, {city.country}</h3>
            <p>{city.description}</p>
            <p><strong>Населення:</strong> {city.population.toLocaleString()} осіб</p>
            <p><strong>Площа:</strong> {city.area} км²</p>
        </div>
    );
}

export default CityCard;