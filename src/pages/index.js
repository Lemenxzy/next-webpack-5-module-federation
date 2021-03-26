import RemoteComponent from '../component/RemoteComponent'
import BaseLayOut from '../component/layout'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
                          shareModuleList: ['react', 'react-dom', 'antd']
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
                  <Route path="/router" exact={true}>
                      <h1>About</h1>
                  </Route>

              </Switch>
          </BaseLayOut>
      </Router>

  );
}
