import Button from "@material-ui/core/Button/Button";
import React from 'react';
import {LightIcon, PositionedWrapper} from "../utilites";

class MainFab extends React.Component {
    render() {
        return (
    <PositionedWrapper
    positon="fixed"
    bottom={60}
    right={60}
    >
    <Button variant="fab" color="primary"><LightIcon>add</LightIcon></Button>
    </PositionedWrapper>
        )
    }
}

export default MainFab;
