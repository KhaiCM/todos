// import logo from './logo.svg';
import React, { useState } from "react";
import { Layout } from 'antd';
// const { Header, Sider, Content } = Layout;
import './App.css';
import Todo from './components/Todo';
import SideBar from './components/Layouts/SideBar';
// import Header from './components/Layouts/Header';

const { Content } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false);

  function changeToggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <SideBar collapsed={collapsed} />
      <Layout>
        {/* <Header collapsed={collapsed} changeToggle={changeToggle} /> */}
        <Content/>
      </Layout>
    </Layout>
    // <div className="App">
    //   <header>
    //   <Todo />
    //   </header>
    // </div>
  );
}

export default App;
