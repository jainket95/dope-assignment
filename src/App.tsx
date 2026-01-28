import { useEffect } from 'react';
import './App.css';

import { useCharacterStore } from './store/useCharacterStore';
import HomePage from './pages/home/HomePage';

function App() {
  const fetchData = useCharacterStore((s) => s.fetchData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-screen h-screen p-10 overflow-hidden">
      <HomePage />
    </div>
  );
}

export default App;
