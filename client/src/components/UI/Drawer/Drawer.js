import {withStyles} from '@material-ui/core'
import Drawer from "@material-ui/core/Drawer/Drawer";
import PropTypes from 'prop-types'
import React from 'react'

const styles = theme => ({
    MainDrawerPaper: {
        width: 240,
        border: 'none',
        transition: "all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms !important",
        overflow:'hidden',
        boxShadow: theme.shadows[15],
        '&.mini': {
            width: 80,
            boxShadow: theme.shadows[14]

        }
    }
})
const DrawerWrapper = ({toggleDrawer, anchor, open, children, classes, mini, expanded,...other}) => {
    console.log(classes);
    return (
        <Drawer open={open}
                anchor={anchor || 'left'}
                variant="permanent"
                {...other}
                PaperProps={{
                    classes: {
                        root: (mini && !expanded) ? classes.MainDrawerPaper + ' mini ' : classes.MainDrawerPaper
                    }
                }}
                ModalProps={{
                    onEscapeKeyDown: toggleDrawer,
                    onBackdropClick: toggleDrawer,
                }
                }
        >
            {children}
        </Drawer>
    )
}
export default withStyles(styles)(DrawerWrapper)

DrawerWrapper.propTypes = {
    anchor: PropTypes.string,
    children: PropTypes.any,
    open: PropTypes.bool,
    toggleDrawer: PropTypes.func
}
