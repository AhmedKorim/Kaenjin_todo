import React, {Fragment} from 'react';
import AppSection from "../../HOC/Section";

class WeekPlan extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2 ">
                            <div className="h2 bg-dark"></div>
                        </div>
                        <div className="col-2 ">
                            <div className="h2 bg-dark"></div>
                        </div>
                        <div className="col-2 ">
                            <div className="h2 bg-dark"></div>
                        </div>
                        <div className="col-2 ">
                            <div className="h2 bg-dark"></div>
                        </div>
                        <div className="col-2 ">
                            <div className="h2 bg-dark"></div>
                        </div>
                        <div className="col-2 ">
                            <div className="h2 bg-dark"></div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AppSection(WeekPlan);
/*
*
* PhpStorm 2018.2
Build #PS-182.3684.42, built on July 26, 2018
Licensed to ahmed korim
Subscription is active until January 15, 2019
JRE: 1.8.0_152-release-1248-b8 amd64
JVM: OpenJDK 64-Bit Server VM by JetBrains s.r.o
Windows 7 6.1
*
*
* */
