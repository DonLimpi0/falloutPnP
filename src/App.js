import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './app.scss'

import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import NavBar from './components/NavBar'
import Races from './components/Race'

class App extends Component {
	constructor(props) {
			super(props)

			this.state = {
				race: null,
			}
	}

	setCharacter = (race) => this.setState({race})

	render() {
		return (
			<div className="app">
				<Router>
					<div>
						<NavBar/>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route path='/races' component={Races}/>
							<Route component={PageNotFound}/>
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'))
