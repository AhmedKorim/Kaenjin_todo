import React, {Fragment} from 'react';
import TodoItem from "../../components/Todo/TodoItem/TodoItem";
import AppSection from "../../HOC/Section";
import './proto.scss'
class MainDashboard extends React.Component {
    render() {

        return <Fragment>

            <div className="container-fluid">
               <div className="row">
                   <div className="col-3 ">
                    <div className="bg-dark h">

                    </div>
                   </div>
                   <div className="col-3 ">
                       <div className="bg-dark h">

                       </div>
                   </div>
                   <div className="col-3 ">
                       <div className="bg-dark h">

                       </div>
                   </div>
                   <div className="col-3 ">
                       <div className="bg-dark h">

                       </div>
                   </div>
                   <div className="col-12 mt-4"></div>
                   <div className="col-6 ">
                       <div className="bg-dark h">
                <TodoItem/>
                       </div>
                   </div>
                   <div className="col-6 ">
                       <div className="bg-dark h">

                       </div>
                   </div>
                   <div className="col-12 mt-4"></div>
                   <div className="col-12 ">
                       <div className="bg-dark h">

                       </div>
                   </div>
               </div>
            </div>
            <div>
            </div>
        </Fragment>

    }
}

export default AppSection(MainDashboard);
