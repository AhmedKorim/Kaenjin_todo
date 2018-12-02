import PropTypes from 'prop-types'
import Paper from "@material-ui/core/Paper/Paper";
import React, {Component} from 'react'
import {Motion, spring} from "react-motion";
import {PositionedWrapper} from "../utilites";

class StateLessDraggableView extends Component {
    config = {stiffness: 120, damping: 10, precision: .1};

    render() {
        let {handleMouseDown, handleTouchStart, width, height, up, x, y, children, ...rest} = this.props;

        return (
            <Motion
                style={{x: spring(x, this.config), y: spring(y, this.config)}}
                defaultStyle={{x, y}}
            >
                {({x, y}) => <PositionedWrapper
                    {...rest}
                    ref={node => this.wrapper = node}
                    width={width || '280px'}
                    height={height || '250px'}
                    position="absolute"
                    elevation="99999"
                    class="bg-dark"
                    top={y + 'px'}
                    left={x + 'px'}
                    onMouseDown={(e) => handleMouseDown(e, this.wrapper)}
                    onTouchStart={(e) => handleTouchStart(e, this.wrapper)}
                >
                    <Motion
                        style={{shadow: spring(up ? 20 : 4, this.config)}}
                        defaultStyle={{shadow: 4}}
                    >
                        {({shadow}) => <Paper className="w-100 h-100"
                                              elevation={Math.floor(shadow)}
                        >{
                            children
                        }
                        </Paper>
                        }
                    </Motion>
                </PositionedWrapper>}
            </Motion>

        )
    }
}

export default StateLessDraggableView

StateLessDraggableView.propTypes = {
    handleMouseDown: PropTypes.func.isRequired,
    handleTouchStart: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    up: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired
}
/*
*     */
