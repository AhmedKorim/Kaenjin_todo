import React from 'react';
import AppSection from "../../HOC/Section";

class MainDashboard extends React.Component {
    render() {
        console.log('mounted [dasgbiard]');
        return (            <div className="display-1 text-center">MainDashboard!</div>

        )
    }
}

export default AppSection(MainDashboard);
