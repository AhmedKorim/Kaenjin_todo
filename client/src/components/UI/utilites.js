import {Icon, IconButton, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";
import React from "react";
import styled from 'styled-components';

export const LightIcon = styled(Icon)`
color: #fff;
`

export const MiniIconButton = styled(IconButton)`
&&{width: 30px;
height: 30px;
min-height: unset;
min-width: unset;
padding: 0;
}
`

export const MiniButton = styled(Button)`
&&{width: 25px;
height: 25px;
min-height: unset;
min-width: unset;
padding: 0;
}
`

export const PositionedWrapper = styled.div.attrs({
    style: ({top, left, right, bottom, elevation, ...other}) =>
        ({top, left, right, bottom, zIndex: elevation, ...other})
})`

position: ${({position}) => position || 'absolute'};
transition: all ease-in-out ${({duration}) => duration ? duration : 0};
`;

export const Container = styled.div`
width: calc(100vw - 240px);
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color:red;
  position:relative;
`

export const StyledButton = styled(Button)`
{min-width: unset!important;
min-height: unset !important;
border-radius: 50% !important;
height: 40px;
width: 40px;}
`
export const StyledPaper = styled(Paper).attrs({
    style:({shadow}) => ({boxShadow:shadow})
})``

export const StyledTypography = styled(Typography).attrs({
    style: ({fontWeight, textTransform, bold, color, ...other}) => ({
        color,
        fontWeight: bold ? 'bold' : fontWeight,
        textTransform,
        ...other
    })
})`
`

export const StopPropagation = (props) => {
    let {
        onMouseDown,
        onTouchStart,
        omMouseUp,
        onClick
    } = props
    return <ButtonBase
        {...props}
        onMouseDown={e => (e.stopPropagation(), onMouseDown && onMouseDown(e))}
        onTouchStart={e => (e.stopPropagation(), onTouchStart && onTouchStart(e))}
        omMouseUp={e => (e.stopPropagation(), omMouseUp && omMouseUp(e))}
        onClick={e => (e.stopPropagation(), onClick && onClick(e))}
    />;
}
export const BacgroundRipple = styled.div.attrs({
    style: ({top, bottom, left, right, zIndex, ...other}) => ({top, bottom, left, right, zIndex, ...other})
})`
position: absolute;
width: 50px;
height: 50px;
transform: translate3d(-50%,-50%,0) scale(1);
border-radius: 50%;

`

export const MinWidht = styled.div`
min-width:${({MW}) => MW + 'px'}
`


export const DumbWrapper = styled.div.attrs({
    style: ({...s}) => ({...s})
})`
position: absolute;
overflow:hidden;
z-index: 5  ;
`
