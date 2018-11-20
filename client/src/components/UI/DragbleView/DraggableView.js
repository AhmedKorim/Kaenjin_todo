import Icon from "@material-ui/core/Icon/Icon";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Paper from "@material-ui/core/Paper/Paper";
import React from 'react';
import {Motion, spring} from "react-motion";
import Fab from "../MainFab/Fab";
import {MiniIconButton, PositionedWrapper, StopPropagation} from "../utilites";
import * as $ from 'jquery';

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
                width='250px'
                height='200px'
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
                        <PositionedWrapper>
                            <IconButton
                                color="secondary"
                                component={StopPropagation}


                            >
                                <Icon>close</Icon>
                            </IconButton>
                        </PositionedWrapper>
                    </Paper>
                    }
                </Motion>
            </PositionedWrapper>
        )
    }
}

export default DraggableView;
