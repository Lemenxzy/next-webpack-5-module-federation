/**
 * @Author zhiyuan.xu
 * @Date 2021-03-27
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021-03-27
 */
import {Fragment, lazy} from "react";
const ACom = lazy(() => import('../view/a'));
const BCom = lazy(() => import('../view/b'));
const Com = lazy(() => import('../view/home'));
import { Route } from 'react-router-dom';


const routes = () => {
    return [
        {
            path: '/routes',
            component: (props) => (
                <Com {...props}/>
            ),
            exact: true,
        },
        {
            path: '/routes/a',
            component: (props) => (
                <ACom {...props}/>
            ),
            exact: true,
        },
        {
            path: '/routes/b',
            component: (props) => (
                <BCom {...props}/>
            ),
            exact: true,
        },
    ];
};

const RoutersCom = () => {
    return <Fragment>
            {
                routes().map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                ))
            }
    </Fragment>
};

export default RoutersCom;
