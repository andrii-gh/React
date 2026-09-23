import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AuthorsList from './pages/AuthorsList/AuthorsList';
import AddAuthor from './pages/AddAuthor/AddAuthor';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/authors" />} />
        <Route path="/authors" element={<AuthorsList />} />
        <Route path="/authors/new" element={<AddAuthor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;