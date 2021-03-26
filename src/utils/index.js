/**
 * @Author zhiyuan.xu
 * @Date 2021/3/25
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/25
 */
export const diffNeedDo = (list1, list2) => {
    const { diffFlag } = listDiff(list1, list2);
    return diffFlag
}

export const getDiffList = (list1, list2) => {
    console.log(111, list1, list2)
    const {list} = listDiff(list1, list2);
    return list
}

// 比较是否有添加新的 包 ，并且返回需要添加的包
const listDiff = (list1, list2) => {
    const list = [];
    let diffFlag = false;

    list2.map((item2) => {
        if (list1.indexOf(item2) < 0) {
            diffFlag = true
            list.push(item2)
        }
    })
    return {
        list,
        diffFlag
    }
}
