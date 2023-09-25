import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import HabitDetailPage from './pages/HabitDetailPage';

function App() {
  return (
    <div className="App">
      <header>
        <h2> "Track All Your Habits In One Go."</h2>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/habit/:id" element={<HabitDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
