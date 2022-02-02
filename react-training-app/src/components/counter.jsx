import React, { Component } from "react";


class Counter extends Component {
    state = {
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    };

    // constructor(props) {
    //     super(props);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    formatValue() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 rounded-pill bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>
        }
        return <ul>{ this.state.tags.map(tag => <li key={ tag }>{ tag }</li>) }</ul>
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.counter.value !== this.props.counter.value) {
            console.log("Prop value did update");
        }
    }

    // componentWillUnmount() {
    //     console.log("Counter - Unmount");
    // }

    render() {
        return (
            <React.Fragment>
                {/*{ this.props.children }*/}
                <h4>Counter #{ this.props.counter.id }</h4>
                <span className={ this.getBadgeClasses() }>{ this.formatValue() }</span>
                <button
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button
                    onClick={ () => this.props.onDelete(this.props.counter.id) }
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                {/*{ this.state.tags.length === 0 && 'Please create a new tag!!' }*/}
                {/*{ this.renderTags() }*/}
            </React.Fragment>
        );
    }
}


export default Counter;