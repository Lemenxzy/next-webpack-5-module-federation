import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  {  Suspense } from 'react';
import RoutersCom from './rooter/routes';
function App() {
  return <BrowserRouter>
    <Suspense
        fallback={null}
    >
        <Switch>
          <Route path={'/routes'}>
            <RoutersCom />
          </Route>
        </Switch>
    </Suspense>
  </BrowserRouter>
}

export default App;
