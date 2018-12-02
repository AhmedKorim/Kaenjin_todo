import React from 'react';
import TodoItem from "../../../components/Todo/TodoItem/TodoItem";
import SortablePlanView from "../../../components/UI/SortablePlanView/SortablePlanView";
import AppSection from "../../../HOC/Section";

class Plans extends React.Component {

    render() {

        return (
            <div className="h-100  position-relative">
                <SortablePlanView
                    cardNumber={15}
                    boxSize={{width: 350, height: 400}}>
                    <SortablePlanView
                        cardNumber={5}
                        boxSize={{width: 300, height: 60}}
                    gutter={15}>
                    </SortablePlanView>
                </SortablePlanView>
            </div>
        )
    }
}

export default AppSection(Plans);

