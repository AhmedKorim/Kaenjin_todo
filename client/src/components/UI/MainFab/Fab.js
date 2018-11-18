import Button from "@material-ui/core/Button/Button";
import React from 'react'
import {LightIcon, PositionedWrapper} from "../utilites";

const Fab = ({bottom, right, mini, position,children,transform,...other}) => {
    return (
        <PositionedWrapper
            positon={position || "fixed"}
            bottom={bottom}
            transform={transform}
            right={right}
        >
            <Button variant="fab" color="primary"
                    mini={mini}
                    {...other}
            >
                <LightIcon>{
                children
                }</LightIcon>
            </Button>
        </PositionedWrapper>
    )
}
export default Fab
