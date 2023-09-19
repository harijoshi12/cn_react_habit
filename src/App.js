import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import HabitDetailPage from './pages/HabitDetailPage';

function App() {
  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/habit/:id" element={<HabitDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
