import React, { Component } from 'react'
import FlashMessage from 'react-native-flash-message';


import Routes from './src/Navigation/Routes'


export default class App extends Component {
  
componentDidMount(){
  store.subscribe(()=>this.setState({ }))
}
  render() {
    return (
    <>
    <Routes/>
     <FlashMessage position='top'/>
    </>
    )
  } 
}
  