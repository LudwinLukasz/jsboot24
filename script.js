var Counter = React.createClass({
	getDefaultProps: function() {
		console.log(this.props);
		console.log('getDefaultProps: definicja propsow identycznych dla wszystkich instancji klasy')
		return {
			test: 'nowy props'
		};
	},
	getInitialState: function() {
		return {
			counter: 1
		};
	},
	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},
	componentWillMount: function() {
		console.log('componentWillMount: nie zmienia tego co ma być renderowane?');
		this.setState({
			counter: 3
		});
	},
	render: function() {
		return React.createElement('div', {}, 
			React.createElement('button', {onClick: this.increment}, 'Dodaj'),
			React.createElement('button', {onClick: this.decrement}, 'Odejmij'),
			React.createElement('span', {}, 'Licznik ' + this.state.counter),
			React.createElement('p', {}, this.props.test)
		);
	},
	componentDidMount: function(){
		console.log('componentDidMount: pobieram dane, moge uzyc stworzony w render element');
	},
	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps: wywolana jak komponent otrzyma nowe propsy');
	},
	shouldComponentUpdate: function() {
		console.log('shouldComponentUpdate: wywolana jak warto updatowac - tu: lubie 5-tki :)');
		if (this.state.counter === 5) {
			return false;
		}
		return true;
	},
	componentWillUpdate: function(){
		console.log('componentWillUpdate');
	},
	componentDidUpdate: function(){
		console.log('componentDidUpdate');
	},
	 componentWillUnmount: function() {
		console.log('componentWillUnmount');
	 }
});
var buttons = React.createElement('div', {}, 
	React.createElement(Counter,{}),
	React.createElement(Counter,{})
	);
ReactDOM.render(buttons, document.getElementById('app'));
setTimeout(function(){ReactDOM.unmountComponentAtNode(document.getElementById('app')); }, 30000);
