import React, { Component, PropTypes } from 'react';
import { Drawer , NavBar , RefreshControl, ListView , Toast , Icon,List } from 'antd-mobile';
// import connect from 'react-redux/lib/components/connect'
// import * as IndexAction from '../redux/actions/IndexAction';

// @connect(
//   state => ({
//     state: state.IndexReducer
//   }),
//   dispatch => ({
//     actions: bindActionCreators(IndexAction, dispatch)
//   })
// )
class Login extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
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
              <h1>Dashboard</h1>
            </div>
        );
    }
}
Login.contextTypes = {
    router: function contextType() {
        return React.PropTypes.Object;
    }
};
export default Login;
