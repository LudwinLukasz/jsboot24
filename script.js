var Counter = React.createClass({
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

    render: function() {
        return React.createElement('div', {}, 
            React.createElement('button', {onClick: this.increment}, 'Dodaj'),
            React.createElement('button', {onClick: this.decrement}, 'Odejmij'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );

   // render: function() {
    //     return React.createElement('div', {onClick: this.increment}, 
    //         React.createElement('span', {}, 'Licznik ' + this.state.counter)
    //     );

    }
});

var buttons = React.createElement('div', {}, 
    React.createElement(Counter,{}),
    React.createElement(Counter,{})
    )
ReactDOM.render(buttons, document.getElementById('app'));
