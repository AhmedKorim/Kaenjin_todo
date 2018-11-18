import Fade from "@material-ui/core/Fade/Fade";
import Icon from "@material-ui/core/Icon/Icon";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import React from 'react'
import {StyledTypography} from "../utilites";

const AppNavigation = ({mini, expanded, links:{top,bottom}}) => {
    return (
        <nav className="d-flex flex-column h-100">
            <div>
                <List component="ul">
                    {top.map(({icon, title}) => <ListItem component="li" button className="">
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
                                            {title}
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
                                            {title}
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
