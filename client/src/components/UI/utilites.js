import {Icon, IconButton} from "@material-ui/core";
import styled from 'styled-components';

export const LightIcon = styled(Icon)`
color: #fff;
`

export const PositionedWrapper = styled.div.attrs({
    style: ({top, left, right, bottom,zIndex}) => ({top, left, right, bottom,zIndex})
})`
position: ${({position}) => position || 'absolute'};
`;
