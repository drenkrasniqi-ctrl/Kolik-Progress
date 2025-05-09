import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import PromoBanner from './components/PromoBanner';
import SalesSection from './components/Sales';
import Stores from './components/Stores';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

import StorePage from './pages/StorePage';
import CategoryPage from './pages/CategoryPage';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />

      <Routes>
        <Route
          path="*"
          element={
            <>
              <CategoryBar />
              <PromoBanner />
              <SalesSection />
              <Stores />
            </>
          }
        />
        <Route path="/store/:slug" element={<StorePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
}

export default App;
