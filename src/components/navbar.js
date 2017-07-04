import React, { Component, PropTypes } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Navbar extends Component {
    static propTypes = {
        className: PropTypes.string,
    };
    static contextTypes = {
      router: React.PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
    }
    onNavbarLeftClick(){
        this.context.router.goBack();
        console.log(123)
    }


    render() {
        return (
            <div>
                <NavBar leftContent="返回" mode="light" onLeftClick={this.onNavbarLeftClick.bind(this)}
                  rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                    <Icon key="1" type="ellipsis" />,
                  ]}
                >NavBar</NavBar>
            </div>
        );
    }
}

export default Navbar;
