import { useState } from 'react';
import './App.css';
import CityInfo from './components/CityInfo';
import FavoriteMovie from './components/FavoriteMovie';
import PetInfo from './components/PetInfo';
import MusicBand from './components/MusicBand';

function App() {
  const [activeTab, setActiveTab] = useState('city');

  const tabs = [
    { id: 'city', label: 'City' },
    { id: 'movie', label: 'Movie' },
    { id: 'pet', label: 'Pet' },
    { id: 'band', label: 'Band' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'city': return <CityInfo />;
      case 'movie': return <FavoriteMovie />;
      case 'pet': return <PetInfo />;
      case 'band': return <MusicBand />;
      default: return <CityInfo />;
    }
  };

  return (
    <div className="App">
      <div className="tabs">
        {tabs.map(tab => (
          <button 
            key={tab.id} 
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;