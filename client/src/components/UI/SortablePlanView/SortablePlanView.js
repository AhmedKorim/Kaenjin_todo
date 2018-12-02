import * as $ from 'jquery'
import React from 'react';
import {connect} from "react-redux";
import {mainScrollSelector} from "../../../store/selectors/layoutSelectors";
import StateLessDraggableView from "../StateLessDraggableView/StateLessDraggableView";


class SortablePlanView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
            positions: [],
            xBoxesCount: null,
            yBoxesCount: null,
            slotsNumber: null,
            boxSizes: props.boxSize,
            gutter:props.gutter || 10,
            id: this.props.id || (Math.random() * 10 + 1).toFixed(2)
        }
    }

    createBoxes() {

        if (this.state.mounted) {
            let positions = [];
            const gutter = this.state.gutter;
            let y = 0,
                x = 0;
            for (let i = 0; i < this.props.cardNumber; i++) {

                x = i % this.state.xBoxesCount === 0 ? 0 : x + 1;
                y = i % this.state.xBoxesCount === 0 && i !== 0 ? y + 1 : y;
                positions.push({
                    y: y * (this.state.boxSizes.height + gutter) + gutter,
                    x: x * (this.state.boxSizes.width + gutter) + this.state.containerGutter + gutter,
                    staticY: y * (this.state.boxSizes.height + gutter) + gutter,
                    staticX: x * (this.state.boxSizes.width + gutter) + this.state.containerGutter + gutter,
                    up: false,
                    offsetY: 0,
                    offsetX: 0,
                    id: x + '' + y + `${this.state.id}`
                })

            }
            this.setState({positions: [...positions]})
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.props.scroll !== nextProps.scroll) {
            const ActiveCard = this.state.positions.find(card => card.up);
            if (ActiveCard) {
                console.log('setting the new scroll');
                this.setState({
                    positions: this.state.positions.map(card => card.up ? {
                        ...card,
                        y: card.y + this.props.scroll - nextProps.scroll,
                        offsetY: card.offsetY + this.props.scroll - nextProps.scroll
                    } : card)
                })
            }
        }
        if (nextProps.boxSize !== this.props.boxSize) {
            this.setState({
                boxSizes: nextProps.boxSize
            })
        }
    }

    handleMouseUp = () => {
        const activeCard = this.state.positions.find(card => card.up)
        if (!activeCard) return;
        const {width,height} =this.state.boxSizes;
        const nearCard = this.state.positions.find(card => Math.abs(card.x - activeCard.x) < width/2 && Math.abs(card.y - activeCard.y) < height/2 && card.id !== activeCard.id) || {id: null}
        if (nearCard.id) console.log('shit here');
        const newPositions = this.state.positions.map(position => {
            switch (position.id) {
                case nearCard.id :
                    return {
                        ...position,
                        staticX: activeCard.staticX,
                        staticY: activeCard.staticY,
                        x: activeCard.staticX,
                        y: activeCard.staticY
                    }
                case activeCard.id :
                    return nearCard.id !== null ? {
                        ...position,
                        up: false,
                        staticX: nearCard.staticX,
                        staticY: nearCard.staticY,
                        x: nearCard.staticX,
                        y: nearCard.staticY
                    } : {
                        ...position,
                        x: activeCard.staticX,
                        y: activeCard.staticY,
                        up: false
                    }
                default:
                    return position
            }
        })
        this.setState({positions: newPositions})
    }

    handleMouseMove = ({pageY, pageX}) => {
        if (!this.state.positions) return;
        const selectedCard = this.state.positions.find(i => i.up)
        if (!selectedCard) return;
        console.log(selectedCard);
        const id = selectedCard.id;
        this.setState({
            positions:
                this.state.positions.map(position => position.id === id ?
                    {
                        ...position,
                        x: pageX - position.offsetX,
                        y: pageY - position.offsetY
                    }
                    : position
                )
        })
    }

    //? Motion Start
    handleTouchStart = (/*key, pressLocation,*/ e, $element, id) => {
        this.handleMouseDown(e, $element, id);
    }

    handleMouseDown = ({pageY, pageX}, $element, id) => {
        // the element it self
        const {top, left} = $($element).offset();
        const {top: thisTop, left: thisLeft} = this.state;

        this.setState({
            positions: this.state.positions.map(position => position.id === id ?
                {
                    ...position,
                    up: true,
                    offsetY: pageY - top + thisTop - this.props.scroll,
                    offsetX: pageX - left + thisLeft,
                }
                : position
            )
        })

    }


    componentDidMount() {
        const wrapper = this.wrapper;
        if (wrapper) {
            // | | | |
            const boxDims = this.state.boxSizes;
            const gutter = this.state.gutter;

            const width = $(wrapper).width();
            const height = $(wrapper).height();

            const minSlotsNumberX = ((width - gutter) / (boxDims.width + gutter));
            const minSlotsNumberY = (height - gutter) / (boxDims.height + gutter)

            const slotsNumber = minSlotsNumberY * minSlotsNumberX;
            const {top, left} = $(this.wrapper).offset();
            this.setState({
                top,
                left,
                mounted: true,
                xBoxesCount: Math.floor(minSlotsNumberX),
                yBoxesCount: Math.floor(minSlotsNumberY),
                slotsNumber: Math.floor(slotsNumber),
                containerGutter: ((width - gutter) - (Math.floor(minSlotsNumberX) * this.state.boxSizes.width + 2 * gutter)) / 2
            }, this.createBoxes)

        }
        // move start
        window.addEventListener('touchmove', this.handleTouchMove);
        // move end
        window.addEventListener('touchend', this.handleMouseUp);
        // move start
        window.addEventListener('mousemove', this.handleMouseMove);
        // move end
        window.addEventListener('mouseup', this.handleMouseUp);
    };


    componentWillUnmount() {
        // move start
        window.removeEventListener('touchmove', this.handleTouchMove);
        // move end
        window.removeEventListener('touchend', this.handleMouseUp);
        // move start
        window.removeEventListener('mousemove', this.handleMouseMove);
        // move end
        window.removeEventListener('mouseup', this.handleMouseUp);
    }


    render() {
        const {
            handleMouseDown,
            handleTouchStart,
            state: {
                positions,
                boxSizes: {width, height}
            },
            props: {
                children
            }
        } = this
        return (
            <div className="h-100  position-relative" ref={node => this.wrapper = node}>
                {positions.map(({x, y, id, up}) => <StateLessDraggableView
                    key={id}
                    width={width}
                    height={height}
                    y={y}
                    x={x}
                    zIndex={up ? 10 : 5}
                    handleMouseDown={(e, $el) => handleMouseDown(e, $el, id)}
                    handleTouchStart={(e, $el) => handleTouchStart(e, $el, id)}
                    up={up}
                >
                    {children}
                </StateLessDraggableView>)}
            </div>
        )
    }
}

const mapStateToProps = state => ({scroll: mainScrollSelector(state)})

export default connect(mapStateToProps)(SortablePlanView);

