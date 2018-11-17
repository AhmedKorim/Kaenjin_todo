import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";
import Icon from "@material-ui/core/Icon/Icon";
import IconButton from "@material-ui/core/IconButton/IconButton";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import RootRef from "@material-ui/core/RootRef/RootRef";
import * as PropTypes from "prop-types";
import React, {Component, Fragment} from 'react'
import styled from 'styled-components';
import {ContextColor} from "../../../HOC/WithContextColors";
import PoperMenu from "../../UI/Menu/Menu";
import {LightIcon, PositionedWrapper, StopPropagation, StyledTypography} from "../../UI/utilites";

const Wrapper = styled(Paper)`
width: 400px;
height: 100px;
margin: .5rem auto;
position:relative;
overflow:hidden;

`
const MiniIconButton = styled(IconButton)`
&&{width: 30px;
height: 30px;
min-height: unset;
min-width: unset;
padding: 0;

}

`

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];


class TodoItem extends Component {
    state = {
        open: false,
    }
    handleClick = open => {
        this.setState(prevState => ({open: !prevState.open}));
    };
    handleClose = _ => this.setState({open: false})
    handleRef = (node) => {
        this.anchorEl = node
    }

    render() {
        let {todo} = this.props;
        const {
            anchorEl,
            handleClose,
            state: {
                open
            }
        } = this;
        return (
            <Fragment>
                <Wrapper elevation={3}>
                    <ButtonBase
                        className="w-100 h-100 d-block" component="div">
                        <div className="row h-100 no-gutters justify-content-center">
                            <div className="col-12 h-75 p-2 ">
                                <div className="d-flex">
                                    <div className="col-8">
                                        <StyledTypography
                                            component="h3"
                                            bold
                                            textTransform="capitalize"
                                            fontSize="1rem"
                                        >
                                            todo name
                                        </StyledTypography>
                                    </div>
                                    <div className="col d-flex justify-content-end p-0 mr-auto">
                                        <ContextColor>
                                            <MiniIconButton color="default"
                                                            component={StopPropagation}
                                            >
                                                <Icon>check</Icon>
                                            </MiniIconButton>
                                        </ContextColor>
                                        <MiniIconButton color="secondary"
                                                        component={StopPropagation}
                                        >
                                            <Icon fontSize="small">delete</Icon>
                                        </MiniIconButton>
                                        <RootRef rootRef={this.handleRef}>
                                            <MiniIconButton
                                                component={StopPropagation}
                                                aria-label="More"
                                                aria-owns={open ? 'long-menu' : undefined}
                                                aria-haspopup="true"
                                                onClick={this.handleClick}
                                            >
                                                <Icon fontSize="small">more_vert</Icon>
                                            </MiniIconButton>
                                        </RootRef>
                                        <PoperMenu
                                            anchorEl={anchorEl}
                                            open={open}
                                            handleClose={handleClose}
                                        >
                                            <List>
                                                <ListItem button> hello</ListItem>
                                                <ListItem button> hello</ListItem>
                                                <ListItem button> hello</ListItem>
                                                <ListItem button> hello</ListItem>
                                            </List>
                                        </PoperMenu>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 h-25 bg-success  p-1 d-flex">
                            </div>
                        </div>
                        <ContextColor>
                            <PositionedWrapper
                                position='absolute'
                                top="50%"
                                left="20px"
                            >
                                {/* transform="translate3d(0,-50%,0)"*/}
                                <Button variant="fab" mini color="primary"
                                        component={StopPropagation}
                                ><LightIcon>play_arrow</LightIcon></Button>
                            </PositionedWrapper>
                        </ContextColor>
                    </ButtonBase>
                </Wrapper>
            </Fragment>
        )
    }
}

TodoItem.propTypes = {todo: PropTypes.any}
export default TodoItem
