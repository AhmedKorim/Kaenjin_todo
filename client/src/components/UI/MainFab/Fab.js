import {Zoom, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import React from 'react'
import {LightIcon, PositionedWrapper} from "../utilites";

const styles = theme => ({
    Tooltip: {
        background: theme.palette.common.white,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[1],
        fontSize: 11,
    }
})

const Fab = ({bottom, right, mini, position, children, classes, transform, ...other}) => {
    return (
        <PositionedWrapper
            positon={position || "fixed"}
            bottom={bottom}
            transform={transform}
            right={right}
        >
            <Tooltip title="action" classes={{tooltip:   classes.Tooltip}} placement="right" open TransitionComponent={Zoom}>
                <Button variant="fab" color="primary"
                        mini={mini}
                        {...other}
                >
                    <LightIcon>{
                        children
                    }</LightIcon>
                </Button>
            </Tooltip>
        </PositionedWrapper>
    )
}
export default withStyles(styles)(Fab)
