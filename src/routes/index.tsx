import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Cadastro, Home, Login } from "../pages"
import { AuthProvider, AuthContext } from "../contexts/auth";
import { Pomodoro } from "../pages";
import { useContext } from "react";

// interface IPrivateRoute {
//     children: React.ReactNode;
// }

// const Private: React.FC<IPrivateRoute> = ({ children }) => {
//     const { authenticated } = useContext(AuthContext);
//     return authenticated ? children : <Navigate to="/login" />;
// };

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* <Route path="/pagina-inicial" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastrar" element={<Cadastro />} />
                    <Route path="*" element={<Navigate to="/pagina-inicial"/>} /> */}
                <Route path="/" element={<Pomodoro />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}