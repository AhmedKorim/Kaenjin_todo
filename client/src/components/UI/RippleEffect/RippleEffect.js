/*import React from 'react';
import {CSSTransition} from "react-transition-group";
import {BacgroundRipple, DumbWrapper} from "../utilites";
import './RippleKeyFrames.scss';

const transtionConfing = {
    enter: 'rippleIn',
    enterActive: 'rippleIn',
    enterDone: 'rippleIn',
    exit: 'rippleOut',
    exitActive: 'rippleOut',
    exitDone: 'rippleOut'
}
const RippleEffect = ({top, left, visible, width, height,$color, ...other}) => {

    return (
        <DumbWrapper width="100%" height="100%" zIndex={visible ? '1200' : 1}>
            <CSSTransition
                in={visible}
                unmountOnExit
                mountOnEnter
                onExited={}
                classNames={transtionConfing} timeout={1000}>
                <BacgroundRipple top={top} left={left} {...other} background={$color} />
            </CSSTransition>
        </DumbWrapper>
    );
};
export default RippleEffect;*/

import * as PropTypes from "prop-types";
import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import {BacgroundRipple, DumbWrapper} from "../utilites";
import './RippleKeyFrames.scss';

const transtionConfing = {
    enter: 'rippleIn',
    enterActive: 'rippleIn',
    enterDone: 'rippleIn',
    exit: 'rippleOut',
    exitActive: 'rippleOut',
    exitDone: 'rippleOut'
}

class RippleEffect extends Component {
    state = {
        over: false
    }
    handleExiting = () => {
        this.setState({over: false})
    }
    handleEntering = () => {
        this.setState({over: true})

    }

    render() {
        let {top, left, visible, width, height, $color, ...other} = this.props;
        const {handleExiting, handleEntering} = this
        return (
            <DumbWrapper width="100%" height="100%" zIndex={this.state.over ? '1200' : 1}>
                <CSSTransition
                    in={visible}
                    unmountOnExit
                    mountOnEnter
                    onExited={handleExiting}
                    onEntering={handleEntering}
                    classNames={transtionConfing} timeout={610}>
                    <BacgroundRipple top={top} left={left} {...other} background={$color}/>
                </CSSTransition>
            </DumbWrapper>
        );
    }
}

RippleEffect.propTypes = {
    top: PropTypes.any,
    left: PropTypes.any,
    visible: PropTypes.any,
    width: PropTypes.any,
    height: PropTypes.any,
    $color: PropTypes.any
}
export default RippleEffect;

