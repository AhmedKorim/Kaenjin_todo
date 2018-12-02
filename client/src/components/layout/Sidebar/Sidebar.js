import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {HANDLE_NAVIGATION_VISIBILITY} from "../../../store/actions/actionTypes";
import {miniSideBarSelector, sideBarSelector} from "../../../store/selectors/layoutSelectors";
import AppNavigation from "../../UI/AppNavigation/AppNavigation";
import DrawerWrapper from "../../UI/Drawer/Drawer";

class Sidebar extends React.Component {
    state = {
        expanded: false
    }
    handleExpantion = (expanded) => {
        if (this.state.expanded === expanded) return;
        this.setState({expanded})
    }

    handleToggle() {
        console.log('handled');
    }

    render() {
        const {open, toggle, mini} = this.props;
        const {expanded} = this.state;
        const {handleExpantion} = this;
        return (
            <DrawerWrapper
                open={open || mini}
                anchor="left"
                toggleDrawer={toggle}
                mini={mini}
                onMouseOver={() => mini && handleExpantion(true)}
                onMouseLeave={() => mini && handleExpantion(false)}
                expanded={expanded}
            ><Fragment>
                <AppBar
                    position="static" color="primary">
                    <Toolbar/>
                </AppBar>
                <AppNavigation
                    mini={mini}
                    links={
                        {
                            top: [
                                {
                                    title: 'Dashboard',
                                    icon: 'dashboard'
                                },
                                {
                                    title: 'plans',
                                    icon: 'today',
                                }, {
                                    title: 'Projects',
                                    icon: 'card_travel'
                                }, {
                                    title: 'Team_work',
                                    icon: 'group_work'
                                }, {
                                    title: 'Categories',
                                    icon: 'category'
                                }, {
                                    title: 'Notes',
                                    icon: 'assignment'
                                }, {
                                    title: 'Alarms',
                                    icon: 'alarm'
                                }
                                , {
                                    title: 'Statistics',
                                    icon: 'insert_chart'
                                }
                            ],
                            bottom: [
                                {
                                    title: 'Settings',
                                    icon: 'settings'
                                },{
                                    title: 'history',
                                    icon: 'history'
                                }, {
                                    title: 'Help',
                                    icon: 'help'
                                },
                            ]
                        }
                    }
                    expanded={expanded}
                />
            </Fragment>
            </DrawerWrapper>
        )
    }
}

const mapStateToProps = state => ({
    open: sideBarSelector(state),
    mini: miniSideBarSelector(state)

})
const mapDispatchToProps = dispatch => ({
    toggle: _ => dispatch({type: HANDLE_NAVIGATION_VISIBILITY})
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
