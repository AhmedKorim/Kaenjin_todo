import React from 'react';
import SortablePlanView from "../../../components/UI/SortablePlanView/SortablePlanView";
import AppSection from "../../../HOC/Section";

class Plans extends React.Component {

    render() {

        return (
            <div className="h-100  position-relative">
                <SortablePlanView/>
            </div>
        )
    }
}

export default AppSection(Plans);

