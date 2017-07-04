import React, { Component, PropTypes } from 'react';
import Navbar from './navbar';
import Footer from './footer';

class App extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props,context) {
        super(props,context);
    }

    render() {
        return (
            <div>
                <Navbar></Navbar> 
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
}
App.contextTypes = {
    router: function contextType() {
        return React.PropTypes.Object;
    }
};

export default App;
