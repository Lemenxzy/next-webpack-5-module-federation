/**
 * @Author zhiyuan.xu
 * @Date 2021/3/24
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/24
 */
// 远程加载 js
const useDynamicScript = (url, name) => {
    return new Promise((resolve) => {
        if (!url) {
            return;
        }
        if (document.getElementById(name) && document.getElementById(name).tagName === 'SCRIPT') {
            resolve({
                ready: true,
            })
            return;
        }
        const element = document.createElement("script");

        element.src = url;
        element.type = "text/javascript";
        element.async = true;
        element.id = name

        document.head.appendChild(element);

        element.onload = () => {
           resolve({
               ready: true,
           })
        };

        element.onerror = () => {
            resolve({
                ready: false,
            })
        };

    })
}

export default useDynamicScript;
