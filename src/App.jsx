import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Clock from "./components/Clock/Clock";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Годинник</h1>
        <h2>Завдання 1 - Різний фон залежно від часу</h2>
        <Clock showDate={true} />
        <h2>Завдання 2 - Кастомні кольори фону</h2>
        <Clock 
          bgColors={{
            morning: '#FFE4B5',
            day: '#87CEEB',
            evening: '#DDA0DD',
            night: '#191970'
          }}
          showDate={true}
        />
        <h2>Завдання 3 - Без дати</h2>
        <Clock showDate={false} />

        <h2>Завдання 4 - Кастомні шрифти</h2>
        <Clock 
          fontFamily="'Georgia', serif"
          fontSize="3rem"
          fontColor="#8B0000"
          showDate={true}
        />
      </div>
    </>
  );
}

export default App;