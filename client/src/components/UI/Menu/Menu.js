import Popover from "@material-ui/core/Popover/Popover";
import React from 'react'

const PoperMenu = ({anchorEl, open,children, handleClose}) => {
    return (
        <Popover
            onClose={handleClose}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            {children}
        </Popover>
    )
}
export default PoperMenu
