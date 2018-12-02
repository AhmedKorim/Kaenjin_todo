import Fade from "@material-ui/core/Fade/Fade";
import Icon from "@material-ui/core/Icon/Icon";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import * as PropTypes from "prop-types";
import React, {Component, Fragment} from 'react'
import {StyledTypography} from "../utilites";
import {NavLink} from 'react-router-dom'
import NavigationList from "./NavigationList";

export const customNavLink = to => props => {
    return <NavLink
        to={to.toLowerCase()}
        {...props}
    />;
}

const AppNavigation = ({mini, expanded, links: {top, bottom}}) => {
    return (
        <nav className="d-flex flex-column h-100">
            <div>
                <NavigationList links={top} mini={mini} expanded={expanded}/>
            </div>
            <div className="mt-auto">
                <NavigationList links={bottom} mini={mini} expanded={expanded}/>
            </div>
        </nav>
    )
}
export default AppNavigation
