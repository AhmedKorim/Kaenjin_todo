import styled from 'styled-components';

export const AppMainWrapper = styled.main.attrs({
    style: ({headerHeight, mini}) => {
        console.log(headerHeight);
        return {
            paddingTop: (headerHeight || 68) + 10,
            width: `calc(100vw - ${mini ? '80px' : '240px'})`
        }
    }
})`
  position:relative;
  transition: width 255ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  margin-left: auto;
padding-left: 15px;
padding-right:15px;
  overflow-x: hidden;
  height:100vh;
`
