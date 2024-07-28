import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Main} from "./pages/Main";
import './App.scss';
import {ProtectedRoute} from "./components/ProtectedRoute";
import {Login} from "./pages/Login";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={
                    <ProtectedRoute>
                        <Main />
                    </ProtectedRoute>
                }/>
                <Route path={'/login'} element={<Login />}/>
            </Routes>
        </Router>
    );
}