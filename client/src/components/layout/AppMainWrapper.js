import styled from 'styled-components';

export const AppMainWrapper = styled.main.attrs({
    style: ({headerHeight}) => {
        console.log(headerHeight);
        return {
            paddingTop:(headerHeight ||68) +10
        }
    }
})`
  position:relative;
  width: 100vw;
  overflow: hidden;
  height:100vh;
`
