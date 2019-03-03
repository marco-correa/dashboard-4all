import React, { Component } from 'react';

import ChatMensagem from './ChatMensagem';
import axios from "axios";
import 'promise-polyfill/src/polyfill';
import smoothscroll from 'smoothscroll-polyfill';

import './../css/chat.css';

export default class Chat extends Component {

  constructor(props){
    super(props);

    smoothscroll.polyfill();
    
    this.enviaForm = this.enviaForm.bind(this);

    this.state = {
      loader: true,
      mensagens: []
    };
  }
  enviaForm(e){
    e.preventDefault();
    if( this.novaMensagem.value && !this.state.loader ){
      axios.post('http://dev.4all.com:3050/messages', {
        message: this.novaMensagem.value
      })
      .then( response => {
        //console.log(response);
        if(response.status === 201){
          
          let newMessage = {
            userName: "me",
            portrait: "",
            message: this.novaMensagem.value,
            displayPortraitLeft: false,
            time: "now"
          }
          let newMessages = this.state.mensagens;
          newMessages.push(newMessage);

          this.setState({mensagens: newMessages});

          // limpa nova mensagem e faz o scroll para a nova
          this.novaMensagem.value = "";
          this.mensagens.scrollTo({
            top: this.mensagens.scrollHeight,
            behavior: "smooth"
          });
        }
      })
      .catch( error => {
        console.log(error);
      });
    }
  }
  updateData(){
    axios.get('http://dev.4all.com:3050/messages')
    .then( response => {
      //console.log(response);
      if(response.status === 200){
        
        this.setState({
          loader: false,
          mensagens: response.data
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
        <section id="chat" className="container-fluid">
			<p className="titulo"><span className="fa fa-comments fa-2x" aria-hidden="true"></span>Chat</p>
			<hr />
            { this.state.loader ? (
                <div id="loader">
                    <span>
                    <i className="fas fa-spinner"></i>
                    </span>
                </div>
            ) : (
                <div id="mensagens" ref={(lista) => this.mensagens = lista}>
                    { this.state.mensagens.map( (mensagem, index) => {
                        return (
                            <ChatMensagem 
                              key={index}
                              orientacao={mensagem.displayPortraitLeft}
                              imagem={mensagem.portrait}
                              nome={mensagem.userName}
                              time={mensagem.time}
                              mensagem={mensagem.message}
                            />
                        );
                    })}
                </div>
            )}
			<hr />			
			<form className="wrapper" onSubmit={this.enviaForm} method="post">
				<input type="text" name="text" placeholder="Type your message here..." ref={(input) => this.novaMensagem = input} />
	  		<button type="submit">Send</button>	
  		</form>				
		</section>        
    );
  }
}