import Paper from "@material-ui/core/Paper/Paper";
import React from 'react';
import {PositionedWrapper} from "../utilites";
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
            x:pageX - this.state.offsetX,
            y:pageY - this.state.offsetY
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
        const springConfig = {stiffness: 300, damping: 50};
        const {
            handleMouseDown,
            handleTouchStart,
            state: {
                x, y
            }
        } = this;
        return (
            <PositionedWrapper
                ref={node => this.wrapper = node}
                width='400px'
                height='400px'
                position="fixed"
                elevation="99999"
                top={y + 'px'}
                left={x + 'px'}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <Paper className="w-100 h-100" elevation={20}>
                    hi
                </Paper>
            </PositionedWrapper>
        )
    }
}

export default DraggableView;
