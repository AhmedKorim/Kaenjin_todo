import {Icon, IconButton, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import React from "react";
import styled from 'styled-components';

export const LightIcon = styled(Icon)`
color: #fff;
`

export const PositionedWrapper = styled.div.attrs({
    style: ({top, left, right, bottom, zIndex, ...other}) =>
        ({top, left, right, bottom, zIndex, ...other})
})`
position: ${({position}) => position || 'absolute'};
`;


export const StyledTypography = styled(Typography).attrs({
    style: ({fontWeight, textTransform, bold, color, ...other}) => ({
        color,
        fontWeight: bold ? 'bold' : fontWeight,
        textTransform,
        ...other
    })
})`
`

export const StopPropagation = props => <Button
    {...props}
    onMouseDown={e => e.stopPropagation()}
    onTouchStart={e => e.stopPropagation()}
    omMouseUp={e => e.stopPropagation()}

/>
