import Head from "next/head";

/**
 * @Author zhiyuan.xu
 * @Date 2021/3/25
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/25
 */
const TripPalModule = '@/system/TripPalModule'

export const ModuleListKey = 'moduleList';
export const DsyncFlag = 'dsyncFlag'

// 全局共享模块初始化
export const GlobalModule = () => {
    window[TripPalModule] = {}
    window[TripPalModule][ModuleListKey] = [];
    window[TripPalModule][DsyncFlag] = false;
}

export const getGlobalModule = (key) => {
    return  window[TripPalModule][key];
}

export const setGlobalModule = (key, value) => {
    window[TripPalModule][key] = value;
}



