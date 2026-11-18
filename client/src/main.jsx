import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './store/device-store';
import UserStore from './store/user-store';

export const Context = createContext(null);
console.log(import.meta.env.VITE_API_URL);

ReactDOM.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            device: new DeviceStore(),
        }}
    >
        <StrictMode>
            <App />
        </StrictMode>
    </Context.Provider>,

    document.getElementById('root')
);
