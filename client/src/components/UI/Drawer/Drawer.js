import PropTypes from 'prop-types'
import Drawer from "@material-ui/core/Drawer/Drawer";
import React from 'react'

const DrawerWrapper = ({toggleDrawer, anchor, open, children}) => {
    return (
        <Drawer open={open}
                anchor={anchor || 'left'}
                PaperProps={{
                    classes: {
                        root: 'MainDrawerPaper'
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
export default DrawerWrapper

DrawerWrapper.propTypes = {
    anchor: PropTypes.string,
    children: PropTypes.any,
    open: PropTypes.bool,
    toggleDrawer: PropTypes.func
}
