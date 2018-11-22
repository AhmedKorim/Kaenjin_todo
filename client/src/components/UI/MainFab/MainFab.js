import React, {Fragment} from 'react';
import Fab from "./Fab";
import {spring, Motion, StaggeredMotion} from 'react-motion';

class MainFab extends React.Component {
    state = {
        open: false
    }
    handleMainClick = (e) => {
        this.setState(prevState => ({open: !prevState.open}))
    }

    render() {
        const {open} = this.state;
        const confg = {stiffness: 600, damping: 10, precision: .01};
        const manyFabConfig = {stiffness: 600, damping:20 , precision: .1};
        const {handleMainClick} = this;
        console.log(open);
        const Defaultstyles = ['delete', 'info', 'alarm', 'play_arrow', 'menu', 'check', 'remove'].map(i =>  ({s: 0}) );
        return (
            <Fragment>
                <Motion
                    defaultStyle={{
                        deg: open ? 0 : 45
                    }}
                    style={{
                        deg: spring(open ? 45 : 0, confg)
                    }}
                >
                    {
                        ({deg}) => (
                            <Fab
                                key={open}
                                positon="fixed"
                                bottom={60}
                                right={60}
                                transform={`rotate(${deg}deg)`}
                                onClick={handleMainClick}
                            >
                                add
                            </Fab>
                        )
                    }
                </Motion>
                <StaggeredMotion
                    defaultStyles={Defaultstyles}
                    styles={
                        prevStyles => prevStyles.map((_, i, {length}) => i === 0
                            ? {
                                s: spring(open ? 1 : 0, manyFabConfig)
                            } : {
                                // s: spring((prevStyles[open ? Math.min(i - 1, 2) : i-1].s),
                                s: spring((prevStyles[ i - 1].s),
                                    {
                                        ...manyFabConfig,
                                        damping: manyFabConfig.damping + i ,
                                        precision:open ?   manyFabConfig.precision :.1
                                    }
                                )}
                        )}
                    onRest={() => console.log('rest')}
                >
                    {(styles) => <Fragment>
                        {
                            styles.map(({s}, i) => <Fab
                                mini
                                key={i}
                                positon="fixed"
                                bottom={76 + (i + 1) * (40 + 12)}
                                right={68}
                                transform={`scale(${s})`}
                            >{['delete', 'info', 'alarm', 'play_arrow', 'menu', 'check', 'remove'][i]}</Fab>)
                        }
                    </Fragment>
                    }
                </StaggeredMotion>
            </Fragment>

        )
    }
}

export default MainFab;
