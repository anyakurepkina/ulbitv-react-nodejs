import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/app-router';
import NavBar from './components/nav-bar';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
