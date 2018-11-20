import Button from "@material-ui/core/Button/Button";
import Grow from "@material-ui/core/Grow/Grow";
import Icon from "@material-ui/core/Icon/Icon";
import Paper from "@material-ui/core/Paper/Paper";
import * as $ from 'jquery';
import React from 'react';
import {Motion, spring} from "react-motion";
import {MiniButton, MiniFabButton, PositionedWrapper, StopPropagation} from "../utilites";

class DraggableView extends React.Component {
    state = {
        x: 0,
        y: 0,
        up: false,
        offsetY: 0,
        offsetX: 0,
    }

    handleMouseUp = () => {
        this.setState({up: false})
    }

    handleMouseMove = ({pageY, pageX}) => {
        if (!this.state.up) return;

        this.setState({
            x: pageX - this.state.offsetX,
            y: pageY - this.state.offsetY
        })
    }

    //? Motion Start
    handleTouchStart = (/*key, pressLocation,*/ e) => {
        this.handleMouseDown(e);
    }

    handleMouseDown = ({pageY, pageX}) => {
        // the element it self
        const {top, left} = $(this.wrapper).offset();


        this.setState({
            up: true,
            offsetY: pageY - top,
            offsetX: pageX - left
        })

    }

    componentDidMount() {
        // move start
        window.addEventListener('touchmove', this.handleTouchMove);
        // move end
        window.addEventListener('touchend', this.handleMouseUp);
        // move start
        window.addEventListener('mousemove', this.handleMouseMove);
        // move end
        window.addEventListener('mouseup', this.handleMouseUp);
    };

    render() {
        const config = {stiffness: 120, damping: 10, precision: .1};
        const {children} = this.props;
        const {
            handleMouseDown,
            handleTouchStart,
            state: {
                x, y, up
            }
        } = this;
        return (
            <PositionedWrapper
                ref={node => this.wrapper = node}
                width='280px'
                height='250px'
                position="fixed"
                elevation="99999"
                class="bg-dark"
                top={y + 'px'}
                left={x + 'px'}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <Motion
                    style={{shadow: spring(up ? 20 : 4, config)}}
                    defaultStyle={{shadow: 4}}
                >
                    {({shadow}) => <Paper className="w-100 h-100"
                                          elevation={Math.floor(shadow)}
                    >
                        <PositionedWrapper
                            right="0"
                            top="0"
                            transform="translate3d(50%,-50%,0)"
                        >
                            <Grow unmountOnExit mountOnEnter in={!up} timeout={300}>
                                <MiniButton
                                    color="secondary"
                                    variant="fab"
                                    component={StopPropagation}
                                >
                                    <Icon fontSize="small">close</Icon>
                                </MiniButton>
                            </Grow>
                        </PositionedWrapper>
                        {
                            children
                        }
                    </Paper>
                    }
                </Motion>
            </PositionedWrapper>
        )
    }
}

export default DraggableView;
