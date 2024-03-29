import React, {useState} from 'react';
import {Layout, Menu, Button, Avatar, Tooltip} from 'antd';
import {
    BookOutlined,
    CheckOutlined, HomeOutlined,
    MenuOutlined,
    UserOutlined, WechatOutlined,
} from '@ant-design/icons';
import {Link, useLocation} from 'react-router-dom';

const {Header, Content, Sider} = Layout;

const MenuBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user"));

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = () => {
        if (collapsed) {
            setCollapsed(false);
        }
    };

    return (
        <Layout>
            <Header
                style={{
                    background: '#2867fa',
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'fixed',
                    width: '100%',
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Button
                        type="text"
                        style={{color: '#fff', marginRight: '16px'}}
                        onClick={toggleSidebar}
                        icon={<MenuOutlined/>}
                    />
                    <h1
                        style={{
                            color: '#fff',
                            margin: 0
                        }}
                    >
                        Project manager
                    </h1>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Link to="/users/profile">
                        <Tooltip
                            title="Профиль пользователя"
                            placement="bottom"
                        >
                            <span style={{
                                marginLeft: '15px',
                                marginRight: '10px',
                                color: '#fff',
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}
                            >
                                {user.username}
                            </span>
                            <Avatar icon={<UserOutlined/>}/>
                        </Tooltip>
                    </Link>
                </div>
            </Header>
            <Layout
                style={{
                    marginTop: '64px'
                }}
            >
                <Sider
                    theme="dark"
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={toggleSidebar}
                    width={200}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        background: '#2867fa',
                    }}
                >
                    <Menu
                        style={{background: '#2867fa'}}
                        theme="dark"
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        onClick={handleMenuClick}
                    >
                        <Menu.Item key="/main" icon={<HomeOutlined/>}>
                            <Link to="/main">Главная страница</Link>
                        </Menu.Item>
                        <Menu.Item key="/homework" icon={<BookOutlined/>}>
                            <Link to="/homework">Домашнее задание</Link>
                        </Menu.Item>
                        <Menu.Item key="/notes" icon={<CheckOutlined/>}>
                            <Link to="/notes">Задачи</Link>
                        </Menu.Item>
                        <Menu.Item key="/chats" icon={<WechatOutlined/>}>
                            <Link to="/chats">Диалоги</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout
                    style={{
                        marginLeft: collapsed ? 80 : 200,
                        background:"white",
                        padding: '0 24px 24px'
                    }}
                >
                    <Content
                        style={{
                            margin: '24px 0',
                            padding: 24,
                            height: '100%'
                        }}
                    >
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default MenuBar;