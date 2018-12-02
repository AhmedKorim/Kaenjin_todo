import React from 'react'
import {connect} from "react-redux";
import styled from 'styled-components';
import {HANDLE_SECTION_SIZE} from "../store/actions/actionTypes";

export const Section = styled.div`
width: 100%;
height:100%;
position:absolute;
top: 0;
left: 0;
`

const mapDispatchToProps = dispatch => ({
    setSectionSize: (sectionSize) => dispatch({type: HANDLE_SECTION_SIZE, sectionSize})
})
const AppSection = Component => connect(null,mapDispatchToProps)(class extends React.Component {
    componentDidMount() {
        if (!this.section) return;
        this.props.setSectionSize(this.section.offsetHeight);
    }

    render() {

        return <Section ref={node => this.section = node}>
            <Component {...this.props}/>
        </Section>
    }
})

export default AppSection

