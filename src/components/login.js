import React, { Component, PropTypes } from 'react';
import { Drawer , NavBar , RefreshControl, ListView , Toast , Icon,List } from 'antd-mobile';

class Details extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props,context) {
        super(props,context);
    }
    onNavbarLeftClick() {
      this.context.router.goBack();
    }
    render() {
      let navbarProps = {
            iconName: false,
            leftContent: <Icon type={require('../assets/svgs/icon_arrow_left.svg')} size="md" style={{color:'#fff'}} />,
            onLeftClick: this.onNavbarLeftClick.bind(this)
        };
        return (
          <div>
            <h1>login</h1>
          </div>
        );
    }
}
Details.contextTypes = {
    router: function contextType() {
        return React.PropTypes.Object;
    }
};
export default Details;
