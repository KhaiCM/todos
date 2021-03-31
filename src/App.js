// import logo from './logo.svg';
import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
// const { Header, Sider, Content } = Layout;
// import './App.css';
import Todo from "./components/Todo";
import SideBar from "./components/Layouts/SideBar";
import Header from "./components/Layouts/Header";
import ROutes from "./Router";
import Routes from "./Router";

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  function changeToggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar collapsed={collapsed} />
      <Layout className="site-layout">
        <Header collapsed={collapsed} changeToggle={changeToggle} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
