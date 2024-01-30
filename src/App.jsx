
import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Home } from "./views/Home/Home";
import { TravelPage } from "./views/TravelPage";

import { SplashScreen } from "./components/SplashScreen";
import { MenuIcon } from "./components/Icons/MenuIcon";



function App() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const [isSpinner, setIsSpinner] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [dotPosition, setDotPosition] = useState({ left: 81 });

  const handleIconClick = (index) => {
    setSelectedIcon(index);
  };

  useEffect(() => {
    if (selectedIcon !== null) {
      const selectedElement = document.querySelector(`.menu-link-${selectedIcon}`);
      if (selectedElement) {
        setDotPosition({ left: selectedElement.offsetLeft });
      }
    }
  }, [selectedIcon]);

  useEffect(() => {
    setTimeout(() => {
      setIsSpinner(false);
    }, 3000);
  }, []);

  return (
    <>
      {!isSpinner && (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel" element={<TravelPage />} />
            
          </Routes>
          {currentUrl !== '/travel' && (
            <header>
              <NavLink
                to="/"
                className={`menu-link menu-link-0 ${selectedIcon === 0 ? 'is-active' : ''}`}
                onClick={() => handleIconClick(0)}
              >
                <MenuIcon type="home" />
              </NavLink>
              <NavLink
                to="/history"
                className={`menu-link menu-link-1 ${selectedIcon === 1 ? 'is-active' : ''}`}
                onClick={() => handleIconClick(1)}
              >
                <MenuIcon type="history" />
              </NavLink>
              <NavLink
                to="/heart"
                className={`menu-link menu-link-2 ${selectedIcon === 2 ? 'is-active' : ''}`}
                onClick={() => handleIconClick(2)}
              >
                <MenuIcon type="heart" />
              </NavLink>
              <NavLink
                to="/profile"
                className={`menu-link menu-link-3 ${selectedIcon === 3 ? 'is-active' : ''}`}
                onClick={() => handleIconClick(3)}
              >
                <MenuIcon type="profile" />
              </NavLink>
              <div className="red-dot" style={dotPosition}></div>
            </header>
          )}
        </>
      )}
      {isSpinner && <SplashScreen />}
    </>
  );
}

export default App;
