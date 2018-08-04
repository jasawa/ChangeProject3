import React, { Component } from 'react';
//import Nav from '../components/Nav'
//import { Col, Row, Container } from "../components/Grid";
//require('./Home.css');

export default class Home extends Component {
    render() {
        return (
            <div>
            <section className="jumbotron" ></section>
            <div className="container mt-4 mb-4">
                <div className="row bg-warning text-center">
                    <div className="col col-md-3 col-sm-12"></div>
                    <div className="col col-md-6 col-sm-12">

                        <img src={require("./images/lg-Hopics.png")} className="img-fluid" alt="HOPICS logo" />

                    </div>
                    <div className="col col-md-3 col-sm-12"></div>
                </div>
            </div>
            <section className="jumbotron" ></section>

            <div className="container-fluid mb-4">
                <div className="row bg-warning text-center">
                    <div className="col col-md-3 col-sm-12">
                         <img src={require("./images/lg-Hopics.png")} className="img-fluid" alt="HOPICS logo" />
                    </div>
                    <div className="col col-md-6 col-sm-12"></div>
                    <div className="col col-md-3 col-sm-12">
                        <img src={require("./images/lg-Hopics.png")} className="img-fluid" alt="HOPICS logo" />
                    </div>
                </div>
            </div>



            <section className="jumbotron" ></section>
            <div className="container mt-4 mb-4">
                <div className="row bg-warning text-center">
                    <div className="col col-md-3 col-sm-12"></div>
                    <div className="col col-md-6 col-sm-12">

                        <img src={require("./images/lg-Hopics.png")} className="img-fluid" alt="HOPICS logo" />

                    </div>
                    <div className="col col-md-3 col-sm-12"></div>
                </div>
            </div>
            <section className="jumbotron" ></section>




            </div>
        )
    }
}