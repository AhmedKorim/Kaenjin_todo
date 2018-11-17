import PropTypes from 'prop-types'
import Drawer from "@material-ui/core/Drawer/Drawer";
import React from 'react'
import {withStyles} from'@material-ui/core'
const styles = theme =>({
    MainDrawerPaper:{
        width:240,
        border:'none',
        boxShadow:theme.shadows[14]
    }
})
const DrawerWrapper = ({toggleDrawer, anchor, open, children,classes}) => {
    console.log(classes);
    return (
        <Drawer open={open}
                anchor={anchor || 'left'}
                variant="persistent"
                PaperProps={{
                    classes: {
                        root: classes.MainDrawerPaper
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
