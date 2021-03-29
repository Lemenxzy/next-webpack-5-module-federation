
/**
 * @Author zhiyuan.xu
 * @Date 2021/3/23
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/23
 */
import style from './title.module.scss';

const TitleCom  = () => {
    return (
        <div className={ style.App }>
            <h2>根据路由远程加载 ，这是ccs隔离的远程第二模块</h2>
        </div>
    );
}

export default TitleCom;
