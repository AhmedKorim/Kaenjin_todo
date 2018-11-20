import React from 'react'
import styled from 'styled-components';
export const Section = styled.div`
width: 100%;
position:absolute;
top: 0;
left: 0;
`
const AppSection = Component => props => {
    return (
        <Section>
            <Component {...props}/>
        </Section>
    )
}
export default AppSection
