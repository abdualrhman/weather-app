import React from 'react'
import WeatherForm from './WeatherForm.js'
import WeatherList from './WeatherList.js'
const url = 'http://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=a5a8f2f0a0571c3d425f6ad15260911c&units=metric';
// url without city and apiKey
const newUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=a5a8f2f0a0571c3d425f6ad15260911c&units=metric'
export default class WeatherManeger extends React.Component {
  constructor(props){
    super(props)
    this.state={
      valueList : null,
      cityTarget : 'copenhagen',
      error : true,
      loading : true,
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
    this.setState({
      loading : true
    })
    const {cityTarget} = this.state;
    fetch(`${newUrl}${cityTarget}${apiKey}`)
    .then((res)=>
          res.json()
    )
    .then(data => {
      this.setState({ valueList : data, loading : false, error :false, main : data.main }, ()=>{console.log(this.state.valueList)})
    })

  }
  changeFunc(event){
    const {value} = event.target;
    this.setState({
      cityTarget : value
    })
  }
  showFunc(){
    this.setState({valueList : null})
    // this.state.cityTarget = null;
    this.fetchData()
  }
  render() {
    return (
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
        />
      </div>
    );
  }
}