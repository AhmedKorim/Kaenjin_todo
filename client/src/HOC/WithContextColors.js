import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import React, {Fragment} from 'react';

export const withContextColor = (palette) => WrappedComponent => props => {
    const theme = createMuiTheme({
        palette: {...palette}
    })
    return <MuiThemeProvider theme={theme}>
        <WrappedComponent {...props} />
    </MuiThemeProvider>
}


export const ContextColor = withContextColor({
    primary: {
        light: "#61cb65",
        main: "#4cb557",
        dark: "#1e9f0e",
    }, secondary: {
        light: "#FF6D00",
        main: "#FF6D00",
        dark: "#FF6D00",
    }, error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
    },
})(props => <Fragment>
    {props.children}
</Fragment>);


export const DarkTheme = withContextColor({
    type: 'dark',
})(props => <Fragment>
    {props.children}
</Fragment>);
