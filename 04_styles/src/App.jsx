import Clock from "./components/Clock/Clock";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Тут ти можеш змінити параметри під себе! */}
      <Clock 
        morningColor="yellow"       // Завдання 2: Ранок
        dayColor="lightblue"        // Завдання 2: День
        eveningColor="black"        // Завдання 2: Вечір/Ніч
        showDate={true}             // Завдання 3: Показувати дату
        fontFamily="'Courier New', monospace" // Завдання 4: Шрифт
        fontSize="36px"             // Завдання 4: Розмір
        fontColor="white"           // Завдання 4: Колір (білий, бо ввечері фон чорний)
      />
      
      {/* Другий годинник: Без дати, з іншими кольорами (щоб показати, що це гнучко) */}
      <Clock 
        morningColor="orange"
        dayColor="green"
        eveningColor="darkblue"
        showDate={false}
        fontFamily="Verdana, sans-serif"
        fontSize="20px"
        fontColor="white"
      />
    </div>
  );
}

export default App;