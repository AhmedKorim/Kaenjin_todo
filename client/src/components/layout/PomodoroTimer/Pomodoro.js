import Divider from "@material-ui/core/Divider/Divider";
import React from 'react';
import {DarkTheme} from "../../../HOC/WithContextColors";
import ButtonNavigationWrapper from "../../UI/BottomNavigation/ButtonNavigation";
import DraggableView from "../../UI/DragbleView/DraggableView";

class PomodoroTimer extends React.Component {

    state = {
        navValue: "timer"
    }
    navigationHandler = (event, value) => {
        this.setState({navValue: value})
        event.stopPropagation();
    }

    render() {
        const {
            state: {
                navValue
            },
            navigationHandler
        } = this;
        console.log(navValue);
        return (

            <DraggableView>
                <div className="d-flex h-100 flex-column">
                    <div className="mt-auto">
                        <Divider/>
                        <ButtonNavigationWrapper
                            value={navValue}
                            showLabels
                            handleChange={navigationHandler}
                            navItems={[
                                {label: 'timer', icon: 'alarm'},
                                {label: 'settings', icon: 'settings'},
                                {label: 'log', icon: 'history'},
                            ]}
                        />
                    </div>
                </div>
            </DraggableView>

        )
    }
}

export default PomodoroTimer;
