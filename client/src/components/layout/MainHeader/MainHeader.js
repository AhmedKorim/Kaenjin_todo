import AppBar from "@material-ui/core/AppBar/AppBar";

import IconButton from "@material-ui/core/IconButton/IconButton";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import React, {Fragment} from 'react'
import {DarkTheme} from "../../../HOC/WithContextColors";
import {LightIcon, PositionedWrapper} from "../../UI/utilites";
import Sidebar from "../Sidebar/Sidebar";

const MainHeader = props => {
    return (
        <AppBar>
            <Fragment>
                <Toolbar>
                    <PositionedWrapper
                        right={120}
                    >
                        <IconButton color="default"><LightIcon>alarm</LightIcon></IconButton>
                    </PositionedWrapper>
                    <PositionedWrapper
                        right={190}
                    >
                        <IconButton color="default"><LightIcon>notifications_none</LightIcon></IconButton>
                    </PositionedWrapper>
                </Toolbar>

                    <Sidebar/>

            </Fragment>
        </AppBar>
    )
}
export default MainHeader
