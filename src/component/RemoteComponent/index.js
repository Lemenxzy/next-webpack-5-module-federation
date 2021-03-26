/**
 * @Author zhiyuan.xu
 * @Date 2021/3/24
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/24
 */
import System from './System';


const Index = ({ data: {scope, module, url, shareModuleList}, ...props }) => {

    return <System module={module}
                   scope={scope}
                   url={url}
                   shareModuleList={shareModuleList}
                   {...props}
    />
};

export default Index
