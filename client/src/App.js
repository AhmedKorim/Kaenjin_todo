import React, {Component, Fragment} from 'react';
import {hot} from 'react-hot-loader'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {connect} from "react-redux";
import './App.css';
import {withRouter} from "react-router-dom";
import {AppMainWrapper} from "./components/layout/AppMainWrapper";
import MainHeader from "./components/layout/MainHeader/MainHeader";
import Todos from "./components/Todo/Todos/Todo";
import SidebarToggler from "./components/UI/Drawer/DrawerToggler";
import MainFab from "./components/UI/MainFab/MainFab";
import {Container} from "./components/UI/utilites";
import AppRoutes from "./Containers/AppRoutes/AppRoutes";
import {REMOVE_ALL, REMOVE_SELECTED} from "./store/actions/actionTypes";
import {miniSideBarSelector} from "./store/selectors/layoutSelectors";

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
        const {removeAll, removeSelected,miniHeader} = this.props;
        return (
            <Fragment>
                <SidebarToggler/>
                <MainHeader/>
                <AppMainWrapper headerHeight={60} mini={miniHeader}>
                    <PerfectScrollbar>
                        <div>
                            <AppRoutes/>
                        </div>
                    </PerfectScrollbar>
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

const mapStateToProps = state =>({
    miniHeader: miniSideBarSelector(state)
})

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));

