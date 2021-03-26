/**
 * @Author zhiyuan.xu
 * @Date 2021/3/25
 * @Version 1.0.0
 * @Last Modified by zhiyuan.xu
 * @Last Modified Time 2021/3/25
 */

import React from "react";

export function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
