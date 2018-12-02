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
            boxSizes: {width: 250, height: 280}
        }
    }

    createBoxes() {

        if (this.state.mounted) {
            let positions = [];
            let y = 0,
                x=0;
            for (let i = 0; i < 20; i++) {

                x = i %  this.state.xBoxesCount === 0 ? 0 : x+1;
                y = i %  this.state.xBoxesCount === 0 && i !== 0 ? y + 1 : y;
                positions.push({
                    y: y * (this.state.boxSizes.height + 10) + 10,
                    x: x * (this.state.boxSizes.width + 10) + this.state.containerGutter + 10,
                    staticY: y * (this.state.boxSizes.height + 10) + 10,
                    staticX: x * (this.state.boxSizes.width + 10) + this.state.containerGutter + 10,
                    up: false,
                    offsetY: 0,
                    offsetX: 0,
                    id: x + '' + y
                })

            }
            this.setState({positions: [...positions]})
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if(this.props.scroll === nextProps.scroll) return;
        const ActiveCard = this.state.positions.find(card => card.up);
        if(ActiveCard){
            console.log('setting the new scroll');
            this.setState({
                positions:this.state.positions.map(card => card.up ? {...card,
                    y:card.y +this.props.scroll - nextProps.scroll,
                    offsetY:card.offsetY+this.props.scroll - nextProps.scroll
                } :card)
            })
        }
    }

    handleMouseUp = () => {
        const activeCard = this.state.positions.find(card => card.up)
        if (!activeCard) return;
        const nearCard = this.state.positions.find(card => Math.abs(card.x - activeCard.x) < 120 && Math.abs(card.y - activeCard.y) < 120 && card.id !== activeCard.id) || {id: null}
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
                    offsetY: pageY - top + thisTop -this.props.scroll,
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
            const gutter = 10;
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
                containerGutter: ((width - gutter) - (Math.floor(minSlotsNumberX) * 260)) / 2
            }, this.createBoxes)

            console.log('widht', ((width + gutter) - (Math.floor(minSlotsNumberX) * 260)) / 2);
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
                top,
                left,
                containerGutter,
                positions
            }
        } = this
        return (
            <div className="h-100  position-relative" ref={node => this.wrapper = node}>
                {positions.map(({x, y, id, up}) => <StateLessDraggableView
                    key={id}
                    width={250}
                    height={280}
                    y={y}
                    x={x}
                    zIndex={up ? 10 : 5}
                    handleMouseDown={(e, $el) => handleMouseDown(e, $el, id)}
                    handleTouchStart={(e, $el) => handleTouchStart(e, $el, id)}
                    up={up}
                >
                    {id}
                </StateLessDraggableView>)}
            </div>
        )
    }
}
const mapStateToProps = state => ({scroll:mainScrollSelector(state)})

export default connect(mapStateToProps)(SortablePlanView);

