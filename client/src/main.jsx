import { createContext, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import DeviceStore from './store/device-store';
import UserStore from './store/user-store';

export const Context = createContext(null);

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
