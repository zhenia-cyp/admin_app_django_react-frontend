import React, {Component} from "react";
import Wrapper from "../Wrapper";
import c3 from 'c3';
import axios from "axios";
import {Navigate} from "react-router-dom";
import {User} from "../../classes/user";

class Dashboard extends Component {
    state = {
        redirect: false
    }
    componentDidMount = async () => {

        let chart = c3.generate({
            bindto: '#chart',
            data: {
                x: 'x',
                columns: [
                    ['x'],
                    ['Sales'],
                ],
                types: {
                    Sales: 'bar'
                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                }
            }
        });

        try {
            const response = await axios.get('orders/chart/');

            const records: { date: string, sum: number }[] = response.data.data;

            chart.load({
                columns: [
                    ['x', ...records.map(r => r.date)],
                    ['Sales', ...records.map(r => r.sum)]
                ]
            })
        } catch (e){


        }
    }


    render(){
        if (this.state.redirect) {
            return <Navigate to="/login"/>
        }
        return (
            <Wrapper>
                <h2>Daily Sales</h2>
                <div id="chart" />
            </Wrapper>
        )
    }
}

export default Dashboard;