import React, { Component } from 'react';

import WidgetItem from './WidgetItem';
import axios from "axios";
import 'promise-polyfill/src/polyfill';
import Format from '../utils/Format';

import './../css/widget.css';

export default class Widget extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      loader: true,
      data: {
        newOrders: "",
        comments: "",
        newUsers: "",
        pageViews: ""
      }
    };
  }

  updateData(){
    axios.get('http://dev.4all.com:3050/widgets')
    .then( response => {
      //console.log(response);
      if(response.status === 200){
        
        let newData = response.data;
        for (let item in newData) {
          newData[item] = Format.number(newData[item]);
        }

        this.setState({
          loader: false,
          data: newData
        });
      }
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
      <section id="widget" className="container-fluid">
        { this.state.loader ? (
          <div id="loader">
            <span>
              <i className="fas fa-spinner"></i>
            </span>
          </div>
        ) : (
          <div className="row">         
            <WidgetItem
              classBackgroundImg="newOrders"
              classIcon="fa-shopping-basket"
              valor={ this.state.data.newOrders }
              categoria="New Orders"
            />

            <WidgetItem
              classBackgroundImg="comments"
              classIcon="fa-comment"
              valor={ this.state.data.comments }
              categoria="New Users"
            />

            <WidgetItem
              classBackgroundImg="newUsers"
              classIcon="fa-user"
              valor={ this.state.data.newUsers }
              categoria="New Users"
            />
            
            <WidgetItem
              classBackgroundImg="pageViews"
              classIcon="fa-chart-bar"
              valor={ this.state.data.pageViews }
              categoria="Page Views"
            />
          </div>
        )}
      </section>
    );
  }
}