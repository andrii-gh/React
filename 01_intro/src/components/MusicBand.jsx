
import './MusicBand.css';

function MusicBand() {
  const band = {
    name: "The Beatles",
    country: "Велика Британія",
    genre: "Рок",
    years: "1960-1970",
    members: [
      { name: "Джон Леннон", role: "Вокал, гітара", image: "[V]" },
      { name: "Пол Маккартні", role: "Вокал, бас-гітара", image: "[G]" },
      { name: "Джордж Харрісон", role: "Гітара", image: "[G]" },
      { name: "Рінго Старр", role: "Барабани", image: "[D]" }
    ],
    albums: [
      { name: "Abbey Road", year: 1969, cover: "https://via.placeholder.com/200x200/aa3bff/fff?text=Abbey+Road" },
      { name: "Let It Be", year: 1970, cover: "https://via.placeholder.com/200x200/c084fc/fff?text=Let+It+Be" },
      { name: "Sgt. Pepper's", year: 1967, cover: "https://via.placeholder.com/200x200/aa3bff/fff?text=Sgt+Pepper" },
      { name: "The White Album", year: 1968, cover: "https://via.placeholder.com/200x200/c084fc/fff?text=White+Album" }
    ],
    description: "Легендарний британський рок-гурт, який змінив музичну культуру світу."
  };

  return (
    <div className="band-container">
      <h1>{band.name}</h1>
      <p className="band-subtitle">{band.description}</p>
      
      <div className="band-info">
        <div className="info-item">
          <span className="label">Країна:</span>
          <span className="value">{band.country}</span>
        </div>
        <div className="info-item">
          <span className="label">Жанр:</span>
          <span className="value">{band.genre}</span>
        </div>
        <div className="info-item">
          <span className="label">Роки активності:</span>
          <span className="value">{band.years}</span>
        </div>
      </div>

      <h2>Учасники гурту</h2>
      <div className="members">
        {band.members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-icon">{member.image}</div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <h2>Альбоми</h2>
      <div className="albums">
        {band.albums.map((album, index) => (
          <div key={index} className="album-card">
            <img src={album.cover} alt={album.name} />
            <h4>{album.name}</h4>
            <p>{album.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicBand;