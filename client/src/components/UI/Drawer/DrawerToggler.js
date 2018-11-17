import IconButton from "@material-ui/core/IconButton/IconButton";
import React from "react";
import {LightIcon, PositionedWrapper} from "../utilites";

export const SidebarToggler  = _ =>    <PositionedWrapper
    left={100}
    top={10}
    zIndex={9999}
>
    <IconButton color="default">
        <LightIcon>menu</LightIcon>
    </IconButton>
</PositionedWrapper>
