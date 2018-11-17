import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import getStore from './store/store';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'

const store = getStore();
const theme = createMuiTheme({});
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
