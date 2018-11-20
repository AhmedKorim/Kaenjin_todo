import React, {Fragment} from 'react';
import AppSection from "../../HOC/Section";

class MainDashboard extends React.Component {
    render() {

        return <Fragment>

            <div className="container-fluid">
               <div className="row">
                   <div className="col-3 ">
                    <div className="bg-danger p-4">

                    </div>
                   </div>
                   <div className="col-3 ">
                       <div className="bg-danger p-4">

                       </div>
                   </div>
                   <div className="col-3 ">
                       <div className="bg-danger p-4">

                       </div>
                   </div>
                   <div className="col-3 ">
                       <div className="bg-danger p-4">

                       </div>
                   </div>
               </div>
            </div>

        </Fragment>

    }
}

export default AppSection(MainDashboard);
