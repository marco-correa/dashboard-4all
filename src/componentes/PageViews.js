import React, { Component } from 'react';

import axios from "axios";
import 'promise-polyfill/src/polyfill';
import 'polyfill-array-includes';
import { Chart } from "react-google-charts";

import './../css/pageViews.css';

export default class PageViews extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      loader: true,
      anime: false,
      data: [
          ["Month" , "Views"]
      ],
      options : {
        title: "Site Traffic Overview",
        curveType: "function",
        legend: "none",
        titleTextStyle: {fontSize: '20', fontName: 'Helvetica', bold: false},
        hAxis: {titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        chartArea: {width: '80%', height:'65%', top: '70'},
        pointSize: 5
      }
    };
  }

  updateData(){
    axios.get('http://dev.4all.com:3050/pageViews')
    .then( response => {
        console.log(response);
        let novosDados = response.data.map( function(item) {
            return [item.month, item.views];
        });
        console.log(novosDados);

        let novoData = this.state.data.concat(novosDados);
        this.setState({
            loader: false,
            data: novoData
        });                
    })
    .catch( error => {
        console.log(error);
    });
  }

  componentDidMount(){
    this.updateData();
  }

  render() {
    return (
        <section id="pageViews" className="container-fluid">
            { this.state.loader ? (
                <div id="loader">
                    <span>
                    <i className="fas fa-spinner"></i>
                    </span>
                </div>
            ) : (
                <div id="chart">
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={this.state.data}
                        options={this.state.options}
                    />
                </div>
            )}
        </section>
    );
  }
}