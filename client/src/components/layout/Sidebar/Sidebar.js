import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import React, {Fragment} from 'react';
import DrawerWrapper from "../../UI/Drawer/Drawer";

class Sidebar extends React.Component {
    handleToggle() {
    console.log('handled');
    }

    render() {
        return (
            <DrawerWrapper
                open={true}
                anchor="left"
                toggleDrawer={this.handleToggle}
            >
                <Fragment>
                    <AppBar position="static" color="primary">
                        <Toolbar/>
                    </AppBar>
                    hi
                </Fragment>

            </DrawerWrapper>
        )
    }
}

export default Sidebar;
