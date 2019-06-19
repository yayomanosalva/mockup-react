import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Search from '../search'
import List from '../list'

export default class Content extends Component {
    render() {
        return (
            <div className="main">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="box">
                                <button type="button" className="btn btn-warning btn-circle"><FontAwesomeIcon icon={faCheck} size="1x" /></button>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="col-md-6 inputs">
                                <Search/>    
                            </div>
                        </div>
                    </div>
                    <List/>
                </section>
                <style jsx>
                    {`
						.btn-circle.btn-xl {
                            width: 70px;
                            height: 70px;
                            padding: 10px 16px;
                            border-radius: 35px;
                            font-size: 24px;
                            line-height: 1.33;
                        }

                        .inputs {
                            width: 350px;
                            height: 90px;
                            padding: 0;
                            float: right;
                        }
                        
                        .btn-circle {
                            width: 30px;
                            height: 30px;
                            padding: 6px 0px;
                            border-radius: 15px;
                            text-align: center;
                            font-size: 12px;
                            line-height: 1.42857;
                            margin-top: 20px;
                        }
                        .main {
                            width: calc(100% - 200px);
                            float: right;
                            padding: 30px;
                            position: relative;
                        }
                    `}
                </style>
            </div>
        )
    }
}