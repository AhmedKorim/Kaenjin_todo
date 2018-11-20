import React, {Fragment} from 'react'
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Todos from "../../components/Todo/Todos/Todo";
import Alarms from "../pages/Alarms";
import Categories from "../pages/Categories";
import Help from "../pages/Help";
import MainDashboard from "../pages/MainDashboard";
import Notes from "../pages/Notes";
import Projects from "../pages/Projects";
import Settings from "../pages/Settings";
import Statistics from "../pages/Statistics";
import TeamWork from "../pages/TeamWork";
import WeekPlan from "../pages/WeekPlan";

const AppRoutes = props => {
    return (
        <Fragment>
            <Route
                render={({location}) => <Fragment>
                    <Route
                        path="/"
                        exact
                        render={_ => <Redirect to="/dashboard"/>}
                    />
                    <TransitionGroup>
                        <CSSTransition classNames="fade" timeout={300} key={location.pathname}>
                         <Switch location={location}>
                            <Route
                                path='/dashboard'
                                component={MainDashboard}
                            />
                            <Route
                                path='/week_plan'
                                component={WeekPlan}
                            />
                            <Route
                                path='/projects'
                                component={Projects}
                            />
                            <Route
                                path='/team_work'
                                component={TeamWork}
                            />
                            <Route
                                path='/categories'
                                component={Categories}
                            />
                            <Route
                                path='/notes'
                                component={Notes}
                            />
                            <Route
                                path='/alarms'
                                component={Alarms}
                            />
                            <Route
                                path='/statistics'
                                component={Statistics}
                            />
                            <Route
                                path='/settings'
                                component={Settings}
                            />
                            <Route
                                path='/Help'
                                component={Help}
                            />
                         </Switch>
                        </CSSTransition>
                    </TransitionGroup>

                </Fragment> }
            />
        </Fragment>
    )
}
export default withRouter(AppRoutes)
