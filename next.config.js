/**
 * @Author zhiyuan.xu
 * @Date 2021/3/25
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/25
 */

module.exports = {
    async rewrites() {
        return [
            // Rewrite everything else to use `pages/index`
            {
                source: '/:path*',
                destination: '/',
            },
        ];
    },
};
