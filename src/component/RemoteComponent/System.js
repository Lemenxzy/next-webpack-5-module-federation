/**
 * @Author zhiyuan.xu
 * @Date 2021/3/24
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/24
 */
import { lazy, Suspense, useRef, useState } from "react";
import { getGlobalModule, setGlobalModule, ModuleListKey, DsyncFlag } from '../../utils/windowKey'
import { commonModule } from './SystemSting';
import useDynamicScript from "../../utils/useDynamicScript";
import { diffNeedDo, getDiffList } from '../../utils/index'

const System = ({ scope, module, url, shareModuleList}, ...props) => {

    const [jsOk, setJsOk] = useState(false)

    const lastName = useRef('');

    // 远程加载js
    if (!url) {
        return <h2>缺少加载的 js 地址</h2>;
    }
    if (!window && !window[scope]) {
        return null;
    }

    // 切换了路由
    if (module !== lastName.current) {
        console.log('-----', url, scope);
        useDynamicScript(url, scope).then(({ready}) => {
            if (ready) {
                // 初始化值
                setJsOk(false)
                // 初始化加载模块，加载过的包只能加载一次, diff逻辑待完成
                if (diffNeedDo(getGlobalModule(ModuleListKey), shareModuleList)) {
                    const list = getDiffList(getGlobalModule(ModuleListKey), shareModuleList);
                    let data = {};
                    list.map((key) => {
                        data[key] = commonModule[key]
                    })
                    window[scope].init(data);
                    // 设置全局变量
                    setGlobalModule(ModuleListKey, [...getGlobalModule(ModuleListKey), ...list]);
                }
                setGlobalModule(DsyncFlag, true)
                // 设置全局变量
                setJsOk(true)
            } else {
                setGlobalModule(DsyncFlag, false)
                setJsOk(false)
            }
        })
    }
    console.log(jsOk);
    lastName.current = module
    if (!getGlobalModule(DsyncFlag)) {
        return <p>切换了路由</p>
    }

    if (!jsOk) {
        return <h2>加载中..</h2>
    }

    const Component = lazy(() => {
        return window[scope].get(module).then((factory) => factory())
    });

    return (
        <Suspense fallback={null}>
             <Component {...props} />
        </Suspense>
    );
}

export default System;
