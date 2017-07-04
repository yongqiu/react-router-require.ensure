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
    replaceToLogin(){
      this.context.router.push('/login')
    }
    render() {
      let navbarProps = {
            iconName: false,
            leftContent: <Icon type={require('../assets/svgs/icon_arrow_left.svg')} size="md" style={{color:'#fff'}} />,
            onLeftClick: this.onNavbarLeftClick.bind(this)
        };
        return (
          <div>
            <h1>表单页面</h1>
            <a href="javascript:;" onClick={this.replaceToLogin.bind(this)}>点击进入login</a>
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
