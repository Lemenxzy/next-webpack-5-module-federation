/**
 * @Author zhiyuan.xu
 * @Date 2021-03-27
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021-03-27
 */
module.exports  = (isEnvProduction) => {
    return {
        publicPath:  isEnvProduction ? 'auto' : '/',
        devPublicPath: '/'
    }
};

