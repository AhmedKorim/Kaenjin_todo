import Grow from "@material-ui/core/Grow/Grow";
import IconButton from "@material-ui/core/IconButton/IconButton";
import React from "react";
import {connect} from "react-redux";
import {HANDLE_NAVIGATION_SIZE, HANDLE_NAVIGATION_VISIBILITY} from "../../../store/actions/actionTypes";
import {miniSideBarSelector, sideBarSelector} from "../../../store/selectors/layoutSelectors";
import {LightIcon, PositionedWrapper} from "../utilites";

const SidebarToggler = ({toggleSidebar,navState}) => <PositionedWrapper
    left={100}
    top={10}
    zIndex={9999}
>
    <Grow in={true} key={navState} timeout={300}>
        <IconButton color="default"
                    onClick={toggleSidebar}>
            <LightIcon>{navState ? 'more_horiz' : 'more_vert'}</LightIcon>
        </IconButton>
    </Grow>
</PositionedWrapper>

const mapDispatchToProps = dispatch => ({
    toggleSidebar: _ => dispatch({type: HANDLE_NAVIGATION_SIZE})
})
const mapStateToProps = state => ({
    navState: miniSideBarSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarToggler);
