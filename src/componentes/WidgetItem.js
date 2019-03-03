import React, { Component } from 'react';

export default class WidgetItem extends Component {
  
  render() {
    return (
      <div className="item col-12 col-sm-12 col-md-5 col-lg-3">
        <div className={"img " + this.props.classBackgroundImg}>
          <span className={"fa " + this.props.classIcon + " fa-4x"} aria-hidden="true"></span>
        </div>
        <div className="resultado">
          <div className="wrapper">
            <p className="valor">{this.props.valor}</p>
            <p className="categoria">{this.props.categoria}</p>							
          </div>						
        </div>
      </div>
    );
  }
}