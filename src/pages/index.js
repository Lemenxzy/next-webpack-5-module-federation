import RemoteComponent from '../component/RemoteComponent'
import BaseLayOut from '../component/layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from "react";

export default function Home(props) {
  const LinkHandle = (key, url) => {
  };

  const [listData, setListData] = useState([
      {
          scope: "hello",
          module: './HelloCom',
          url: 'http://127.0.0.1:3001/remoteEntry.js',
          shareModuleList: ['react', 'react-dom'],
          exact: true,
          path: '/',
          name: '首页'
      },
      {
          scope: "title",
          module: './TitleCom',
          url: 'http://127.0.0.1:3002/remoteEntry.js',
          shareModuleList: ['react', 'react-dom'],
          exact: true,
          path: '/title',
          name: 'TITLE'
      },
      {
          scope: "router",
          module: './RoutersCom',
          url: 'http://127.0.0.1:3003/remoteEntry.js',
          shareModuleList: ['react', 'react-dom', 'react-router-dom'],
          exact: false,
          path: '/routes',
          name: 'ROUTER'
      }
  ]);

  const [linkData, setLinkData] = useState([
      {
          path: '/',
          name: '首页',
          scope: "hello",
          module: './HelloCom',
          url: 'http://127.0.0.1:3001/remoteEntry.js',
          shareModuleList: ['react', 'react-dom'],
          exact: true
      },
      {
          path: '/title',
          name: 'TITLE',
          scope: "title",
          module: './TitleCom',
          url: 'http://127.0.0.1:3002/remoteEntry.js',
          shareModuleList: ['react', 'react-dom'],
          exact: true
      },
      {
          path: '/routes',
          name: '路由搞起',
          scope: "router",
          module: './RoutersCom',
          url: 'http://127.0.0.1:3003/remoteEntry.js',
          shareModuleList: ['react', 'react-dom', 'react-router-dom'],
          exact: false
      }
      ])

  return (
      <Router>
          <BaseLayOut listData={listData} LinkHandle={LinkHandle}>
              <Switch>
                  {
                      listData.map((item) => {
                          return  <Route key={item.scope} path={ item.path } exact={ item.exact }>
                              <RemoteComponent data={{
                                  scope: item.scope,
                                  module: item.module,
                                  url: item.url,
                                  shareModuleList: item.shareModuleList
                              }} />
                          </Route>
                      })
                  }
              </Switch>
          </BaseLayOut>
      </Router>

  );
}
