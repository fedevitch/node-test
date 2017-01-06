import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';

class Main extends React.Component{
	constructor(props) {
		super(props);
		console.log("constructor of <Main/> executed successfully");
		console.log("build v0.21");
	}

	render(){
		return(
			<div>
				<center><h3>Hello from boilerplate</h3></center>
				<h4>Node.js test app</h4>

				<p>sample of project</p>

				Contains:
				<ul>
					<li>nodejs server</li>
					<li>React view</li>
					<li>sample of unit tests, jshint(codestyle checker) and istanbul(code coverage checker)</li>
				</ul>
			</div>
		);
	}
}


ReactDOM.render(
	<Main />,
	document.getElementById('main_app')
);
