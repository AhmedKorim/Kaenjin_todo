import React, {Fragment} from 'react';
import DraggableView from "../../../components/UI/DragbleView/DraggableView";
import {PositionedWrapper} from "../../../components/UI/utilites";
import AppSection from "../../../HOC/Section";
import * as $ from 'jquery'

class Plans extends React.Component {
    state = {
        mounted: false,
        positions: [],
        xBoxesCount: null,
        yBoxesCount: null,
        slotsNumber: null,

    }

    createBoxes() {
        if (this.state.mounted) {
            let positions = [];
            for (let x = 0; x < this.state.xBoxesCount; x++) {
                for (let y = 0; y < this.state.yBoxesCount; y++) {
                    positions.push({
                        x, y
                    })
                }
            }
            console.log(positions);
            this.setState({positions})
        }
    }

    componentDidMount() {
        const wrapper = this.wrapper;
        if (wrapper) {
            // | | | |
            const boxDims = {width: 250, height: 280};
            const gutter = 10;
            const width = $(wrapper).width();
            const height = $(wrapper).height();

            const minSlotsNumberX = ((width - gutter) / (boxDims.width + gutter));
            const minSlotsNumberY = (height - gutter) / (boxDims.height + gutter)

            const slotsNumber = minSlotsNumberY * minSlotsNumberX;
            this.setState({
                mounted: true,
                xBoxesCount: Math.floor(minSlotsNumberX),
                yBoxesCount: Math.floor(minSlotsNumberY),
                slotsNumber: Math.floor(slotsNumber),
                containerGutter: ((width - gutter ) - (Math.floor(minSlotsNumberX) * 260)) / 2
            }, this.createBoxes)
            console.log('widht' ,   ((width + gutter ) - (Math.floor(minSlotsNumberX) * 260))/2  );
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="h-100 bg-danger position-relative" ref={node => this.wrapper = node}>
                {
                    (this.state.mounted && this.state.positions) && <Fragment>
                        {
                            this.state.positions.map(({x, y}) => <DraggableView
                                width={250}
                                height={280}
                                className="bg-dark"
                                y={y * (280 + 10) +10  }
                                x={x * (250 + 10) + this.state.containerGutter+10}
                            >
                                top={y * (280 + this.state.containerGutter) + this.state.containerGutter+10 + 'px'}
                                left={x * (250 + this.state.containerGutter) + this.state.containerGutter+10 + 'px'}
                                <br/>
                                container gutter ={this.state.containerGutter}
                            </DraggableView>)
                        }
                    </Fragment>
                }
            </div>
        )
    }
}

export default AppSection(Plans);
/*
*
* PhpStorm 2018.2
Build #PS-182.3684.42, built on July 26, 2018
Licensed to ahmed korim
Subscription is active until January 15, 2019
JRE: 1.8.0_152-release-1248-b8 amd64
JVM: OpenJDK 64-Bit Server VM by JetBrains s.r.o
Windows 7 6.1
*
*
* */
