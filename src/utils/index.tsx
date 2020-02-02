export function debounce (func: Function, ms: number = 300) {
    let timer: NodeJS.Timeout
    return function (...args: any[]) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            return func(...args)
        }, ms)
    }
}