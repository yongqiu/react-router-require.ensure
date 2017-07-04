
import { TabBar } from 'antd-mobile'
import React, { Component, PropTypes } from 'react';

class Footer extends Component {
    static propTypes = {
        className: PropTypes.string,
    };
    static contextTypes = {
      router: React.PropTypes.object.isRequired
    };
    constructor(props) {
      super(props);
    }
    replaceToDashboard(){
      this.context.router.replace('/dashboard')
    }
    replaceToDetails(){
      this.context.router.replace('/details')
    }

    render() {
        return (
            <footer>
              <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white">
                <TabBar.Item
                  title="首页"
                  key="首页"
                  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/XLdKiKAwDRXQNhC.png' }}
                  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/iKfBQdGdTMubhXy.png' }}
                  onPress = {this.replaceToDashboard.bind(this)}
                  >
                </TabBar.Item>
                <TabBar.Item
                  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                  title="帮忙"
                  key="帮忙"
                  onPress = {this.replaceToDetails.bind(this)}
                  >
                </TabBar.Item>
                <TabBar.Item
                  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png' }}
                  title="求助"
                  key="求助">
                </TabBar.Item>
                <TabBar.Item
                  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
                  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                  title="我"
                  key="我">
                </TabBar.Item>
              </TabBar>
            </footer>
        );
    }
}
export default Footer;
