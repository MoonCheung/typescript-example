import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '@/icons/logo.svg';
import { Row, Col } from 'antd';
import routes from './router';
import React from 'react';
import '@/styles/App.less';

type HeaderType = {
  name: string;
};

//可复用的组件
const Header = (props: HeaderType) => <p className='head'>{props.name}</p>;

const App = () => (
  <Router>
    <div className='App'>
      <Row>
        <Col className='gutter-row' span={6}>
          <div className='gutter-box'>
            <img src={logo} className='App-logo' alt='logo' />
            <Header name='实战篇' />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link className='App-link' to='/drag'>
                  拖曳
                </Link>
              </li>
            </ul>
            <Header name='Hook 实战篇' />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link className='App-link' to='/counter'>
                  计数器
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className='gutter-row' span={18}>
          <div className='gutter-box'>
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route key={index} path={route.path} component={route.main} />
              ))}
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  </Router>
);

export default App;
