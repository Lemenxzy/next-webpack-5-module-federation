/**
 * @Author zhiyuan.xu
 * @Date 2021/3/23
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/23
 */
const dependencies = require('../package.json').dependencies;

module.exports = (isDev ) => {
    return {
        ...dependencies,
        'react-dom': {
            eager: isDev,
            requiredVersion: dependencies["react-dom"],
            singleton: true,
        },
        react: {
            eager: isDev,
            requiredVersion: dependencies["react"],
            singleton: true,
        },
        antd: {
            eager: isDev,
            requiredVersion: dependencies["antd"],
            singleton: true,
        }
    }
}
