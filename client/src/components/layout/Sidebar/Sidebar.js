import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {HANDLE_NAVIGATION_VISIBILITY} from "../../../store/actions/actionTypes";
import {sideBarSelector} from "../../../store/selectors/layoutSelectors";
import DrawerWrapper from "../../UI/Drawer/Drawer";

class Sidebar extends React.Component {
    handleToggle() {
        console.log('handled');
    }

    render() {
        const {open, toggle} = this.props;
        return (
            <DrawerWrapper
                open={open}
                anchor="left"
                toggleDrawer={toggle}
            >
                <Fragment>
                    <AppBar position="static" color="primary">
                        <Toolbar/>
                    </AppBar>
                   {open}
                </Fragment>
            </DrawerWrapper>
        )
    }
}

const mapStateToProps = state => ({
    open: sideBarSelector(state)

})
const mapDispatchToProps = dispatch => ({
    toggle: _ => dispatch({type: HANDLE_NAVIGATION_VISIBILITY})
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
