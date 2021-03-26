/**
 * @Author zhiyuan.xu
 * @Date 2021/3/24
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/24
 */
import { useRef } from 'react'
import { Layout, Menu } from 'antd';
import {  NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import style from './layout.module.scss'
import { Link } from 'react-router-dom';
import { DsyncFlag, setGlobalModule } from '../../utils/windowKey'

const BaseLayOut = (props) => {

    const activeKey = useRef('')

    const handleClick = ({key}) => {
        if (activeKey.current !== key) {
            setGlobalModule(DsyncFlag, false)
            activeKey.current = key
        }
    };

    return <Layout className={style.BaseLayOut}>
        <Header className="header">
            <div className="logo" />
        </Header>
        <Content>
            <Layout className="site-layout-background">
                <Sider className="site-layout-background"
                       style={{
                           overflow: 'auto',
                           height: 'calc( 100% - 64px )',
                           position: 'fixed',
                           left: 0,
                       }}
                       width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['hello']}
                        defaultOpenKeys={['sub3']}
                        style={{ height: '100%' }}
                        onClick={handleClick}
                    >

                        <Menu.Item key="hello">
                            <Link to="/">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="title">
                            <Link to="/title">TITLE</Link>
                        </Menu.Item>
                        <Menu.Item key="router">
                            <Link to="/router">
                                ROOTER
                            </Link>
                        </Menu.Item>

                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{
                    position: 'fixed',
                    left: 200,
                    right: 0,
                    height: 'calc( 100% - 64px )',
                    width: 'calc( 100% - 200px )',
                    overflow: 'auto',
                }}>
                    { props.children }
                </Content>
            </Layout>
        </Content>
    </Layout>
}

export default BaseLayOut;
