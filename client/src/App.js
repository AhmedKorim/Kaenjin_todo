import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import Chip from "@material-ui/core/Chip/Chip";
import Icon from "@material-ui/core/Icon/Icon";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import React, {Component, Fragment} from 'react';
import {hot} from 'react-hot-loader'
import {connect} from "react-redux";
import styled from 'styled-components';
import './App.css';
import {AppMainWrapper} from "./components/layout/AppMainWrapper";
import MainHeader from "./components/layout/MainHeader/MainHeader";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Todos from "./components/Todo/Todos/Todo";
import {SidebarToggler} from "./components/UI/Drawer/DrawerToggler";
import MainFab from "./components/UI/MainFab/MainFab";
import {LightIcon, PositionedWrapper} from "./components/UI/utilites";
import {REMOVE_ALL, REMOVE_SELECTED} from "./store/actions/actionTypes";

class App extends Component {

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:3032/api/todo');
            const data = await response.json();
            console.log(data);
        } catch (e) {

        }

    }


    render() {
        const {removeAll, removeSelected} = this.props;
        return (
            <Fragment>
                <SidebarToggler/>
                <MainHeader/>
                <AppMainWrapper headerHeight={60}>
                    <div>
                        <Todos todos={['ahmed', 'omar', 'marc', 'jock', 'magorn']}/>
                    </div>
                    <div className="my-5">
                        <Button variant="extendedFab"
                                onClick={removeSelected}
                                color="primary">
                            <Typography className="text-center" color="inherit">
                                Remove Selected
                            </Typography></Button>
                        <Button variant="extendedFab" color="secondary" onClick={removeAll}>
                            <Typography className="text-center"
                                        color="inherit">
                                Remove all
                            </Typography></Button>
                    </div>
                </AppMainWrapper>
                <MainFab/>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    removeAll: () => dispatch({type: REMOVE_ALL,}),
    removeSelected: () => dispatch({type: REMOVE_SELECTED})
})

export default hot(module)(connect(null, mapDispatchToProps)(App));

