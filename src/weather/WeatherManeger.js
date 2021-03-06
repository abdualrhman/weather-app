import React from 'react'
import WeatherForm from './WeatherForm.js'
import WeatherList from './WeatherList.js'


/*
full weather api url
http://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=a5a8f2f0a0571c3d425f6ad15260911c&units=metric
*/
const newUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=a5a8f2f0a0571c3d425f6ad15260911c&units=metric'
export default class WeatherManeger extends React.Component {
  constructor(props){
    super(props)
    this.state={
      valueList : null,
      cityTarget : 'copenhagen',
      loading : false,
      error:false,
      main: {},
    }
    this.fetchData = this.fetchData.bind(this)
    this.showFunc = this.showFunc.bind(this);
    this.changeFunc=this.changeFunc.bind(this)
  }
componentDidMount(){
  this.fetchData()
}

  fetchData(){
    const me=this;
    this.setState({
      loading : true
    })
    const {cityTarget} = this.state;
    fetch(`${newUrl}${cityTarget}${apiKey}`)
    .then(function(response) {
  if(response.ok) {
    return response.json();
  }
  // throw new Error('Network response was not ok.');

  me.setState({
    error : true,
    loading:false
  })
})
    .then(data => {
      this.setState({ valueList : data,error: false, loading : false, main : data.main})
    })
    .catch(error=>{
      console.log(error)
    })
  }
  changeFunc(event){
    const {value} = event.target;
    this.setState({
      cityTarget : value
    })
  }
  showFunc(){
    this.fetchData()
  }
  render() {
    return (
      <div>{this.state.valueList &&
        <div>
          <WeatherForm
          showHandler={this.showFunc}
          changeHandler={this.changeFunc}
          city={this.state.cityTarget}
          />
          <WeatherList list={this.state.valueList}
          loading={this.state.loading}
          error={this.state.error}
          main={this.state.main}
          center={{lat: this.state.valueList.coord.lat,
          lng:this.state.valueList.coord.lon}}
          />
        </div>
      }
      </div>

    );
  }
}
