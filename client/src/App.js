import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import './App.css';
import {AppMainWrapper} from "./components/layout/AppMainWrapper";
import MainHeader from "./components/layout/MainHeader/MainHeader";
import PomodoroTimer from "./components/layout/PomodoroTimer/Pomodoro";
import SidebarToggler from "./components/UI/Drawer/DrawerToggler";
import MainFab from "./components/UI/MainFab/MainFab";
import AppRoutes from "./Containers/AppRoutes/AppRoutes";
import {HANDLE_MAIN_SCROLL, REMOVE_ALL, REMOVE_SELECTED} from "./store/actions/actionTypes";
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
        const {removeAll, removeSelected, miniHeader,setCurrentScroll} = this.props;
        return (
            <div className="APP__ROOT">
                <SidebarToggler/>
                <MainHeader/>
                <AppMainWrapper headerHeight={60} mini={miniHeader}>
                    <PerfectScrollbar onScrollY={container => container && setCurrentScroll(container.scrollTop)}>
                        <div>
                            <AppRoutes/>
                        </div>
                    </PerfectScrollbar>
                </AppMainWrapper>
                <PomodoroTimer/>
                <MainFab/>
            </div>

        )
            ;
    }
}

const mapDispatchToProps = dispatch => ({
    removeAll: () => dispatch({type: REMOVE_ALL,}),
    removeSelected: () => dispatch({type: REMOVE_SELECTED}),
    setCurrentScroll: (scroll) => dispatch({type:HANDLE_MAIN_SCROLL,scroll})
})

const mapStateToProps = state => ({
    miniHeader: miniSideBarSelector(state)
})

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));

