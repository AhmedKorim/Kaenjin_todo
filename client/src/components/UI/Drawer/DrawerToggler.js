import Grow from "@material-ui/core/Grow/Grow";
import IconButton from "@material-ui/core/IconButton/IconButton";
import React from "react";
import {connect} from "react-redux";
import {HANDLE_NAVIGATION_VISIBILITY} from "../../../store/actions/actionTypes";
import {sideBarSelector} from "../../../store/selectors/layoutSelectors";
import {LightIcon, PositionedWrapper} from "../utilites";

const SidebarToggler = ({toggleSidebar,navState}) => <PositionedWrapper
    left={100}
    top={10}
    zIndex={9999}
>
    <Grow in={true} key={navState} timeout={300}>
        <IconButton color="default"
                    onClick={toggleSidebar}>
            <LightIcon>{navState ? 'close' : 'menu'}</LightIcon>
        </IconButton>
    </Grow>
</PositionedWrapper>

const mapDispatchToProps = dispatch => ({
    toggleSidebar: _ => dispatch({type: HANDLE_NAVIGATION_VISIBILITY})
})
const mapStateToProps = state => ({
    navState: sideBarSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarToggler);
