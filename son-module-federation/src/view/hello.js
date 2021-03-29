
/**
 * @Author zhiyuan.xu
 * @Date 2021/3/23
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/23
 */
// import './hello.scss';
import style from './hello.module.scss'
import logo from './logo.svg';
import { Button } from 'antd';

const HelloCom  = () => {
    return (
        <div className={ style.App }>
            <header className={ style.AppHeader }>
                <img src={logo} className={ style.AppLogo } alt="logo" />
                <p>
                    你知道吗，这是app1，集成了 antd，根据路由远程加载
                </p>
                <Button type="primary">Primary Button</Button>
            </header>
        </div>
    );
}

export default HelloCom;
