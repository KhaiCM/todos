import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    GithubOutlined,
    VideoCameraOutlined,
    AliwangwangOutlined,
  } from '@ant-design/icons';
  import { Link, useLocation } from "react-router-dom";

function SideBar (props) {
    const { Sider } = Layout;

    let location = useLocation();

    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<GithubOutlined />}>
              <Link to="/signup">SignUp</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<AliwangwangOutlined />}>
              <Link to="/todos">Todo List</Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

SideBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default SideBar;
