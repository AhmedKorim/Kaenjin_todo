import {Paper} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Icon from "@material-ui/core/Icon/Icon";
import IconButton from "@material-ui/core/IconButton/IconButton";
import React from 'react'
import styled from 'styled-components';
const Wrapper = styled(Paper)`
width: 400px;
margin: .5rem auto;
`
const MiniIconButton = styled(IconButton)`
&&{width: 30px;
height: 30px;
min-height: unset;
min-width: unset;
padding: 0;

}

`
const TodoItem = ({todo}) => {
    return (
    <Wrapper elevation={12}>
        <div className="row">
            <div className="col-2"><Checkbox

            /></div>
            <div className="col-8">{todo}</div>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <MiniIconButton color="secondary" ><Icon fontSize="small">remove</Icon></MiniIconButton></div>
        </div>
    </Wrapper>
    )
}
export default TodoItem
