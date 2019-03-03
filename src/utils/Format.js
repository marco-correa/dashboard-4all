export default class Format{

    static number(number) {
      return number >= 1000 ? (number / 1000).toFixed(1) + "k" : number;
    }
  
  }
  