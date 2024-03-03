import React, { Component } from 'react';

class Bmi extends Component {

  constructor(props) {
     super(props);
     this.state = { name: 'Guest', weight: 90, height: 180, bmi: 27, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
     this.submitMe = this.submitMe.bind(this);
     this.heightchange = this.heightchange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.change = this.change.bind(this);  
     this.ticker = this.ticker.bind(this); 
     this.blur = this.blur.bind(this); 
     this.calculateBMI = this.calculateBMI.bind(this); 
  }


  heightchange(e){
    this.setState({height: e.target.value});
    e.preventDefault();
  }

  blur(e){
   this.calculateBMI();
  }

   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  calculateBMI(){

      var heightSquared = (this.state.height/100  * this.state.height/100);
      var bmi = this.state.weight / heightSquared;
      var low = Math.round(18.5 * heightSquared);                                                         
      var high = Math.round(24.99 * heightSquared);    
      var message = "";
      if( bmi >= 18.5  && bmi <= 24.99 ){
          message = "You are in a healthy weight range";
      }
      else if(bmi >= 25 && bmi <= 29.9){
        message = "You are overweight";
      }
      else if(bmi >= 30){
          message ="You are obese";
      }
      else if(bmi < 18.5){
        message = "You are under weight";
      }
      this.setState({message: message});  
      this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
      this.setState({bmi: Math.round(bmi * 100) / 100});   

  }

  submitMe(e) {
     e.preventDefault();
     this.calculateBMI();
  }

  ticker() {
    this.setState({time: new Date().toLocaleTimeString()})
  }
 
  componentDidMount(){
    setInterval(this.ticker, 60000);
  }

  change(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({name: e.target.value});
  }


  render() {
    return (
      <div className="Bmi">

        <div className="Bmi-header">
          <div className="bmi-logo-container bmi-logo-1-container"><img className="bmi-logo-1 bmi-image-logo-1" src={ require('../pictures/bmi-body-mass-index-calculator-icon-vector-44405758.jpg') } /></div>

          <div className="bmi-logo-container bmi-logo-2-container"><img className="bmi-logo-1" src={ require('../pictures/istockphoto-1329027246-612x612.jpg') } /></div>
        </div>

          <form onSubmit={this.submitMe} className="Bmi-form">
            <label>
              Please enter your name:
            </label>
            <input className="bmi_input" type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change} style={{width: "50%"}}  />
             <label>
             Enter your height in cm: 
            </label>
            <input className="bmi_input" type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange} style={{width: "50%"}}   />
             <label>
             Enter your weight in kg : 
            </label>
            <input className="bmi_input" type="text" name="weight" value={this.state.weight} onChange={this.weightchange}  style={{width: "50%"}}   />

            <div className="bmi-result-output">
              <label>{this.state.checked} Hello {this.state.name}, How are you my friend? It's currently  {this.state.time} where you are living. Your BMI is {this.state.bmi} </label>

                <label>{this.state.message}</label>

                <label>{this.state.optimalweight}</label>
            </div>
             
            <input className="bmi_input" type="submit" value="Submit"/>
          </form>
      
      </div>
    );
  }
}

export default Bmi;
