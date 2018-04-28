import React from 'react'
import WeatherForm from './WeatherForm.js'
import WeatherList from './WeatherList.js'
import SimpleMap from '../maps/index.js'


/*
full url
http://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=a5a8f2f0a0571c3d425f6ad15260911c&units=metric
*/
const newUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=a5a8f2f0a0571c3d425f6ad15260911c&units=metric'
export default class WeatherManeger extends React.Component {
  constructor(props){
    super(props)
    this.state={
      valueList : null,
      cityTarget : 'copenhagen',
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
      this.setState({ valueList : data, loading : false, main : data.main }, ()=>{console.log(this.state.valueList)})
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
        main={this.state.main}
        />
        {this.state.valueList &&
        <SimpleMap center={{lat: this.state.valueList.coord.lat,
        lng:this.state.valueList.coord.lon}}/>}
      </div>
    );
  }
}
