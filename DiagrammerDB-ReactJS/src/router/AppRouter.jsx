import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage,RegisterPage  } from "../auth/index";
import { HomePage } from "../pages/HomePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "../store/auth/authSlice";
import { DiagramPage } from "../pages/DiagramPage/DiagramPage";

export const AppRouter = () => {  
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      dispatch(logout());
    } else {
      dispatch(login({ id: user.id, nombre: user.nombre}));
    }    
  }, [status]);

  const PrivateRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diagram/:id" element={<DiagramPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  };

  const PublicRoutes = () => {
    return (
      <Routes>
        <Route path="/auth/register" element={ <RegisterPage />} />
        <Route path="/*" element={ <LoginPage />} />        
      </Routes>
    );
  };

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (        
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};
