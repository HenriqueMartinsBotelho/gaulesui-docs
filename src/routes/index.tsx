import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ButtonPage } from "../pages";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página inicial',
        icon: 'house',
        path: '/pagina-inicial'
      },
      {
        label: 'Button',
        icon: 'smart_button',
        path: '/button-page'
      },
    
    ])
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard/>
        }
      />
      <Route path="/button-page" element={<ButtonPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
