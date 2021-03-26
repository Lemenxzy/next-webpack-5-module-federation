/**
 * @Author zhiyuan.xu
 * @Date 2021/3/25
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/25
 */
import {dependencies} from "../../../package.json";

export const commonModule = {
    react: {
        [dependencies.react]: {
            get: () => Promise.resolve().then(() => () => require("react")),
        },
    },
    antd: {
        [dependencies.antd]: {
            get: () => Promise.resolve().then(() => () => require("antd")),
        }
    },
    'react-dom': {
        [dependencies["react-dom"]]: {
            get: () => Promise.resolve().then(() => () => require("react-dom")),
        }
    },
    'react-router-dom': {
        [dependencies["react-router-dom"]]: {
            get: () => Promise.resolve().then(() => () => require("react-router-dom")),
        }
    }
}
