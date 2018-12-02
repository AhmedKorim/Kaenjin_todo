import PropTypes from 'prop-types'
import Paper from "@material-ui/core/Paper/Paper";
import React from 'react'
import {Motion, spring} from "react-motion";
import {PositionedWrapper} from "../utilites";

const StateLessDraggableView = ({handleMouseDown, handleTouchStart, width, height, up,...rest}) => {
    const config = {stiffness: 120, damping: 10, precision: .1};
    return (
        <PositionedWrapper
            {...rest}
            ref={node => this.wrapper = node}
            width={width || '280px'}
            height={height || '250px'}
            position="absolute"
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
                >{
                    children
                }
                </Paper>
                }
            </Motion>
        </PositionedWrapper>
    )
}
export default StateLessDraggableView

StateLessDraggableView.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  up: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired
}
