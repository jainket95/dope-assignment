import { useEffect } from 'react';

import { useCharacterStore } from './store/useCharacterStore';
import HomePage from './pages/home/HomePage';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import BasicTablePage from './pages/basic-table/BasicTablePage';
import InfiniteScrollPage from './pages/infinite-scroll-table/InfiniteScrollPage';
import VirtualizedTablePage from './pages/virtualized-table/VirtualizedTablePage';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const fetchData = useCharacterStore((s) => s.fetchData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center p-10 overflow-hidden gap-y-10 relative">
      {pathname !== '/' && (
        <button
          className="absolute top-10 left-10 rounded-lg bg-black text-white px-4 py-2"
          onClick={handleBack}
        >
          Back to HomePage
        </button>
      )}
      <h1 className="text-5xl font-semibold">
        Large Data Table & Management (FE Assignment)
      </h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basic" element={<BasicTablePage />} />
        <Route path="/infinite" element={<InfiniteScrollPage />} />
        <Route path="/virtualized" element={<VirtualizedTablePage />} />
      </Routes>
    </div>
  );
}

export default App;
