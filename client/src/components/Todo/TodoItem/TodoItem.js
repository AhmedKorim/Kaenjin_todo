import {Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";
import Grow from "@material-ui/core/Grow/Grow";
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
import RippleEffect from "../../UI/RippleEffect/RippleEffect";
import {LightIcon, PositionedWrapper, StopPropagation, StyledTypography} from "../../UI/utilites";
import * as $ from 'jquery';

const Wrapper = styled(Paper)`
width: 400px;
height: 75px;
margin: .2rem auto;
position:relative;
overflow:hidden;
.base-wrapper{
 position:relative;
 z-index: 234;
}

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

const defaultRippleParam = {
    x: '16%',
    y: '50%'
}

class TodoItem extends Component {
    state = {
        open: false,
        done: false,

        deleted: false,
        running: false,

        rippleParam: defaultRippleParam
    }
    handleClick = open => {
        this.setState(prevState => ({open: !prevState.open}));
    };

    handleClose = _ => this.setState({open: false})

    handleRef = (node) => {
        this.anchorEl = node
    }


    handleRunning = _ => {
        this.setState(prevState => ({running: !prevState.running}))
    }

    handleAction = (e, key, action) => {
        // handler coordinates
        const {clientX, clientY} = e;
        const rippleParam = {
            x: clientX - this.state.left,
            y: clientY - this.state.top
        }
        // that fab

        /*
        *
        * play_arrow -> running =false
        * undo -> deleted = true
        * pause -> running = true
        * */

        console.log(rippleParam);
        if (!action) {
            // use that key

            let rippleParam = this.defaultRippleParam || defaultRippleParam;
            console.log(this.defaultRippleParam);
            const stateProportion = (key === 'play_arrow' || key === 'pause') ? 'running' : 'deleted'
            this.setState(prevState => ({
                [stateProportion]: !prevState[stateProportion],
                rippleParam
            }))
        } else {
            this.setState({
                [action]: true,
                rippleParam
            });
        }

    }

    updateDia() {
        const wrapper = this.wrapper;
        if (wrapper) {
            this.setState({
                width: $(wrapper).width(),
                height: $(wrapper).height(),
                ...$(wrapper).offset()
            },this.getDefaultRippleParam)
        }
    }

    getDefaultRippleParam() {
        const fab = this.fabWrapper;
        if (fab) {
            const {left,top} = $(fab).offset();
            console.log($(fab).offset());
            this.defaultRippleParam = {
                x:  left - this.state.left,
                y: top - this.state.top
            }
        }
    }

    componentDidMount() {
        this.updateDia()
    }


    render() {
        let {todo} = this.props;
        const {
            anchorEl,
            handleClose,
            handleRunning,
            handleAction,
            handleDeleted,
            state: {
                open,
                deleted,
                done,
                running,
                rippleParam: {
                    x,
                    y
                }
            }
        } = this;
        // palay now normal state
        const key = deleted || running ? deleted ? "replay" : "pause" : "play_arrow";
        return (
            <Fragment>
                <RootRef
                    rootRef={node => this.wrapper = node}
                >
                    <Wrapper elevation={1}
                    >
                        <RippleEffect
                            visible={deleted || running}
                            top={y}
                            left={x}
                            $color='green'
                        />
                        <ButtonBase
                            className="w-100 h-100 d-block base-wrapper" component="div">
                            <div className="row h-100 no-gutters justify-content-center">
                                <div className="col-2 py-2 h-100 flex-column  d-flex align-items-sm-start bg-success">
                                    <StyledTypography
                                        component="div"
                                        textTransform="capitalize"
                                        fontSize="1rem"
                                        textAlign="center"
                                        display="block"
                                        width="100%"
                                        color="#fff"
                                    >
                                        00 : 57
                                    </StyledTypography>
                                </div>
                                <div className="col p-0 ">
                                    <div className="col-12 h-50 p-2 ">
                                        <div className="d-flex">
                                            <div className="col-7 p-0 pl-2 ">
                                                <div>
                                                    <StyledTypography
                                                        component="h3"
                                                        bold
                                                        textTransform="capitalize"
                                                        fontSize="1rem"
                                                        lineHeight='1.1rem'
                                                    >
                                                        todo name
                                                    </StyledTypography>
                                                    <StyledTypography
                                                        component="span"
                                                        bold
                                                        textTransform="capitalize"
                                                        fontSize=".8rem"
                                                        textIndent=".1rem"
                                                    >
                                                        todo name
                                                    </StyledTypography>
                                                </div>
                                            </div>
                                            <div className="col d-flex justify-content-end p-0 mr-auto">
                                                <ContextColor>
                                                    <MiniIconButton color="default"
                                                                    component={StopPropagation}
                                                                    onClick={e => handleAction(e, key, 'done')}
                                                    >
                                                        <Icon>check</Icon>
                                                    </MiniIconButton>
                                                </ContextColor>
                                                <MiniIconButton color="secondary"
                                                                onClick={e => handleAction(e, key, 'deleted')}
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
                                                    handleClose={e => handleAction(e, key)}
                                                >
                                                    <List
                                                        onMouseDown={e => e.stopPropagation()}
                                                        onTouchStart={e => e.stopPropagation()}
                                                        omMouseUp={e => e.stopPropagation()}
                                                    >
                                                        <ListItem button> hello</ListItem>
                                                        <ListItem button> hello</ListItem>
                                                        <ListItem button> hello</ListItem>
                                                        <ListItem button> hello</ListItem>
                                                    </List>
                                                </PoperMenu>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 h-50   p-1 d-flex">
                                        <div className="col d-flex align-items-center text-center">
                                            <StyledTypography
                                                component="p"
                                                textTransform="capitalize"
                                                fontSize=".8rem"
                                                textIndent=".1rem"
                                            >
                                                Lorem ipsum dolor sit amet.
                                            </StyledTypography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ButtonBase>
                        <ContextColor>
                            <PositionedWrapper
                                ref={node => this.fabWrapper = node}
                                position='absolute'
                                top="50%"
                                left={deleted || running ? deleted ? "80%" : "50%" : "16%"}
                                transform={deleted || running ? "translate3d(-50%,-50%,0)" : "translate3d(-50%,-30%,0)"}
                                duration=".3s"
                                elevation={1400}
                            >
                                <Button variant="fab" mini color="primary"
                                        onClick={e => handleAction(e, key)}
                                ><LightIcon>
                                    {key}
                                </LightIcon>
                                </Button>
                            </PositionedWrapper>
                        </ContextColor>
                    </Wrapper>
                </RootRef>
            </Fragment>
        )
    }
}

TodoItem.propTypes = {todo: PropTypes.any}
export default TodoItem
