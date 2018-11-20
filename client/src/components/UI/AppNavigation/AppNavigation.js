import Fade from "@material-ui/core/Fade/Fade";
import Icon from "@material-ui/core/Icon/Icon";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import React from 'react'
import {StyledTypography} from "../utilites";
import {NavLink} from 'react-router-dom'

export const customNavLink = to => props => {
    return <NavLink
        to={to}
        {...props}
    />;
}

const AppNavigation = ({mini, expanded, links: {top, bottom}}) => {
    console.log('render');

    return (
        <nav className="d-flex flex-column h-100">
            <div>
                <List component="ul">
                    {top.map(({icon, title}) => <ListItem component={customNavLink(title)} button className="">
                            <div className="d-flex align-items-center justify-content-start   w-100">
                                <div className="text-center  d-flex align-items-center ">
                                    <Icon color="primary">{icon}</Icon>
                                </div>
                                <Fade in={expanded || !mini} timeout={300}>
                                    <div className="ml-2 d-flex  align-items-center justify-content-center">
                                        <StyledTypography
                                            fontSize="1rem"
                                            whiteSpace="nowrap"
                                            component="div"
                                        >
                                            {title.replace(/_/, ' ')}
                                        </StyledTypography>
                                    </div>
                                </Fade>
                            </div>
                        </ListItem>
                    )}
                </List>
            </div>
            <div className="mt-auto">
                <List component="ul">
                    {bottom.map(({icon, title}) => <ListItem component="li" button className="">
                            <div className="d-flex align-items-center justify-content-start   w-100">
                                <div className="text-center  d-flex align-items-center ">
                                    <Icon color="primary">{icon}</Icon>
                                </div>
                                <Fade in={expanded || !mini} timeout={300}>
                                    <div className="ml-2 d-flex  align-items-center justify-content-center">
                                        <StyledTypography
                                            fontSize="1rem"
                                            whiteSpace="nowrap"
                                            component="div"
                                        >
                                            {title.replace(/_/, ' ')}
                                        </StyledTypography>
                                    </div>
                                </Fade>
                            </div>
                        </ListItem>
                    )}
                </List>
            </div>
        </nav>
    )
}
export default AppNavigation
