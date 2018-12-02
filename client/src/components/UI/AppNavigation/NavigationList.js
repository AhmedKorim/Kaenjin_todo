import PropTypes from 'prop-types'
import Fade from "@material-ui/core/Fade/Fade";
import Icon from "@material-ui/core/Icon/Icon";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import React from 'react'
import {StyledTypography} from "../utilites";
import {customNavLink} from "./AppNavigation";

const NavigationList = ({links,mini,expanded}) => {
    console.log(links.length);

    return (
        <List component="ul">
            {links.length > 0 && links.map(({icon, title}) => <ListItem component={customNavLink(title)} button className="">
                    <div className="d-flex align-items-center justify-content-start   w-100">
                        <div className="text-center  d-flex align-items-center ">
                            <Icon color="primary">{icon}</Icon>
                        </div>
                        <Fade in={expanded || !mini} timeout={300} style={{transitionDelay: (expanded || !mini) ? '.1s' : '0'}}>
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

    )
}
export default NavigationList

NavigationList.propTypes = {
    links:PropTypes.array,
    mini:PropTypes.bool,
    expanded:PropTypes.bool
}
