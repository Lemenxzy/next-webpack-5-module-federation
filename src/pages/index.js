import RemoteComponent from '../component/RemoteComponent'
import BaseLayOut from '../component/layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Suspense} from "react";

export default function Home(props) {
  const LinkHandle = (key, url) => {
  }

  return (
      <Router>
          <BaseLayOut LinkHandle={LinkHandle}>
              <Switch>
                  <Route path="/" exact={true}>
                      <RemoteComponent data={{
                          scope: "hello",
                          module: './HelloCom',
                          url: 'http://127.0.0.1:3001/remoteEntry.js',
                          shareModuleList: ['react', 'react-dom']
                      }} />
                  </Route>
                  <Route path="/title" exact={true}>
                      <RemoteComponent data={{
                          scope: "title",
                          module: './TitleCom',
                          url: 'http://127.0.0.1:3002/remoteEntry.js',
                          shareModuleList: ['react', 'react-dom']
                      }} />
                  </Route>
                  <Route path="/routes">
                      <RemoteComponent data={{
                          scope: "router",
                          module: './RoutersCom',
                          url: 'http://127.0.0.1:3003/remoteEntry.js',
                          shareModuleList: ['react', 'react-dom', 'react-router-dom']
                      }} />
                  </Route>

              </Switch>
          </BaseLayOut>
      </Router>

  );
}
