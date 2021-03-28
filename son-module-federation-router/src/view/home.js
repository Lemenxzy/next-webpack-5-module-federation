/**
 * @Author zhiyuan.xu
 * @Date 2021-03-28
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021-03-28
 */
import { Link } from 'react-router-dom'
const BCom = () => {
    return <div>
        <p>首页</p>
        <Link to='/routes/a'>跳转到A</Link>
        ----------
        <Link to='/routes/b'>跳转到B</Link>
    </div>
};
export default BCom
