import React, {Component, Fragment} from 'react';
import {hot} from 'react-hot-loader'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import './App.css';
import {AppMainWrapper} from "./components/layout/AppMainWrapper";
import MainHeader from "./components/layout/MainHeader/MainHeader";
import PomodoroTimer from "./components/layout/PomodoroTimer/Pomodoro";
import DraggableView from "./components/UI/DragbleView/DraggableView";
import SidebarToggler from "./components/UI/Drawer/DrawerToggler";
import MainFab from "./components/UI/MainFab/MainFab";
import AppRoutes from "./Containers/AppRoutes/AppRoutes";
import {DarkTheme} from "./HOC/WithContextColors";
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
        const {removeAll, removeSelected, miniHeader} = this.props;
        return (
            <div className="APP__ROOT">
                <SidebarToggler/>
                <MainHeader/>
                <AppMainWrapper headerHeight={60} mini={miniHeader}>
                    <PerfectScrollbar>
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
    removeSelected: () => dispatch({type: REMOVE_SELECTED})
})

const mapStateToProps = state => ({
    miniHeader: miniSideBarSelector(state)
})

export default hot(module)(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));

