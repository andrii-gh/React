
import './PetInfo.css';

function PetInfo() {
  const pet = {
    name: "Мурчик",
    type: "Кіт",
    breed: "Британський короткошерстий",
    age: "3 роки",
    color: "Сірий з білими лапками",
    weight: "5.5 кг",
    personality: "Ласкавий, грайливий, любить спати на сонці",
    likes: ["Грати з м'ячиком", "Їсти рибу", "Дивитись у вікно"],
    photo: "https://via.placeholder.com/300x300/aa3bff/fff?text=Pet"
  };

  return (
    <div className="pet-container">
      <h1>Мій домашній улюбленець</h1>
      <div className="pet-content">
        <div className="pet-photo">
          <img src={pet.photo} alt={pet.name} />
          <div className="pet-type-badge">{pet.type}</div>
        </div>
        <div className="pet-details">
          <h2>{pet.name}</h2>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="label">Порода:</span>
              <span className="value">{pet.breed}</span>
            </div>
            <div className="detail-item">
              <span className="label">Вік:</span>
              <span className="value">{pet.age}</span>
            </div>
            <div className="detail-item">
              <span className="label">Колір:</span>
              <span className="value">{pet.color}</span>
            </div>
            <div className="detail-item">
              <span className="label">Вага:</span>
              <span className="value">{pet.weight}</span>
            </div>
          </div>
          <div className="personality">
            <h3>Характер</h3>
            <p>{pet.personality}</p>
          </div>
          <div className="likes">
            <h3>Любить</h3>
            <div className="likes-list">
              {pet.likes.map((like, index) => (
                <span key={index} className="like-tag">{like}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetInfo;