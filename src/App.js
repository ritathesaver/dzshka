import React from 'react';
import './App.css';
import FirstComponent from './FirsrComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
	return (
		<div className="app-wrapper">
			<BrowserRouter>
				<NavBar />
				<div className="content-wrapper">
					<div className="component first">
						<Route path="/first" component={FirstComponent} />
					</div>
					<div className="component second">
						<Route path="/second" component={SecondComponent} />
						<Redirect from="/second" to="/second/first" />
					</div>
					<div className="component third">
						<Route path="/second/:id" component={ThirdComponent} />
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
