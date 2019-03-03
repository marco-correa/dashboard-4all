//import axios from "axios";

// export default axios.create({
//   baseURL: 'http://dev.4all.com:3050/'
// });

//export default class Services{

    // static getWidgets(){
    //     axios.get('http://dev.4all.com:3050/widgets')
    //     .then( response => {
    //       //console.log(response);
    //       console.log('envia resposta');
          
    //       if(response.status === 200){
    //         let data = response.data;
            
    //         for (let item in data) {
    //           data[item] = Format.number(data[item]);
    //         }
   
    //         return new Promise( (resolve, reject) => {
    //           resolve(data);
    //         });
    //       }
    //     })
    //     .catch( error => {
    //       console.log(error);

    //       const data = {
    //         newOrders: "",
    //         comments: "",
    //         newUsers: "",
    //         pageViews: ""
    //       };

    //       return new Promise( (resolve, reject) => {
    //         reject(data);
    //       });


    //     });
    // }

  
//}