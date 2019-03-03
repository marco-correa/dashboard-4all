import React, { Component } from 'react';

export default class ChatMensagem extends Component {
  
  render() {
    return (
        <div className="mensagem">
            { this.props.orientacao ? ( 
                <div className="suporte left">
                    { this.props.imagem ? (
                        <span className="img" style={{backgroundImage: "url(" + this.props.imagem + ")"}}>80 x 80</span>
                    ) : (
                        <span className="img">80 x 80</span>
                    )}
                </div>
                ) : ( 
                <div className="suporte right">
                    { this.props.imagem ? (
                        <span className="img" style={{backgroundImage: "url(" + this.props.imagem + ")"}}>80 x 80</span>
                    ) : (
                        <span className="img">80 x 80</span>
                    )}
                </div>                                
                )
            }

            <div className="conteudo">
                <p className="nome">{ this.props.nome }</p>
                <p className="tempo">{ this.props.time }</p>
                <p className="texto">{ this.props.mensagem }</p>
            </div>
        </div>
    );
  }
}