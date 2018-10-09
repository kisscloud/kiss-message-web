// 获取当前时间的秒数
export const GetNowSeconds = () => {
    return Date.parse(new Date()) / 1000
}

// 获取当前时间的毫秒数
export const GetNowMilliSeconds = () => {
    return new Date().getTime()
}