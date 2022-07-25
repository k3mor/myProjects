import { render } from "@testing-library/react";
import React, {Component} from "react";
import './Crypto.css';
import axios from "axios";
import CryptoList from "./CryptoList";

class Crypto extends Component{

  constructor(props){
    super(props);

    this.state={
      cryptoList: [],
      filterCryptoList: [],
    };
  }

  componentDidMount(){
    this.getCryptoData();
    this.timerID = setInterval(() => this.getCryptoData(), 5000);
  }
componentWillUnmount(){
  clearInterval(this.timerID);
}
  getCryptoData = () => {
    axios.get('https://blockchain.info/ticker').then(res => {const tickers = res.data;
//start, dwie tablice startowe (pola)  aktualnymi kursami walut
      this.setState((state)=>{
        let newCryptoList = [];//j/w ale przefiltrowane
        
        for(const [ticker,cryptoRate] of Object.entries(tickers)){
          
          let lastCryptoObj = state.cryptoList.find((cryptoObj)=>{
            return(cryptoObj.currency === ticker);
          });
          
          //console.log(lastCryptoObj);

          let newCryptoObj = {
            currency: ticker,
            symbol: cryptoRate.symbol,
            buy: cryptoRate.buy,
            sell: cryptoRate.sell,
            lastRate: cryptoRate.last,
          }
          
          if(lastCryptoObj !== undefined){ 
            if(newCryptoObj.lastRate>lastCryptoObj.lastRate) {
              newCryptoObj.cssClass = 'green';
              newCryptoObj.htmlArray = String.fromCharCode(8593);
              } else if(newCryptoObj.lastRate<lastCryptoObj.lastRate) {
                newCryptoObj.cssClass = 'red';
                newCryptoObj.htmlArray = String.fromCharCode(8595);
              }else{ newCryptoObj.cssClass = 'blue';
              newCryptoObj.htmlArray = String.fromCharCode(8596); }
          }else{
            newCryptoObj.cssClass = 'blue';
            newCryptoObj.htmlArray = String.fromCharCode(8596); 
          }
          newCryptoList.push(newCryptoObj);
        }
        //console.log(newCryptoObj);
       return({
            cryptoList: newCryptoList//Uaktualnienie tablicy
          })
      });
      //console.log(res.data);
      //console.log(newCryptoList);
      this.filterCryptoList();
    });
  }

filterCryptoList = () => {
  this._inputFilter.value = this._inputFilter.value.trim().toUpperCase();

  this.setState((state) => {
    let newFiltercryptolist = state.cryptoList.filter((cryptoObj) => {
      return(cryptoObj.currency.includes(this._inputFilter.value));
    });
    return({
      filterCryptoList: newFiltercryptolist
    });
  });

  //console.log(this._inputFilter.value);
}

  render(){
    return(
        <div className="Crypto">
          <input  ref= {element => this._inputFilter = element} onChange={this.filterCryptoList}  type="text" placeholder="Filter" />
            <CryptoList cryptoList={this.state.filterCryptoList}/>
        </div>
    );
  }
}
export default Crypto;