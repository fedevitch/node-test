import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';

class Main extends React.Component{
	constructor(props) {
		super(props);
		console.log("constructor of <Main/> executed successfully");
	}

	render(){
		return(
			<div>
				<center><h3>Hello from boilerplate</h3></center>
				<h4>node-test</h4>

				<p>sample of project</p>
				
				Contains:
				<ul>
					<li>nodejs server</li>
					<li>react boilerplate</li>
					<li>sample of unit tests, jshint(codestyle checker) and istanbul(coverage checker)</li>
				</ul>
			</div>
		);
	}
}


ReactDOM.render(
	<Main />,
	document.getElementById('main_app')
);
