export function debounce (func: Function, ms: number = 300) {
    let timer: NodeJS.Timeout
    return function <T>(...args: T[]) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            return func.apply(null, args)
        }, ms)
    }
}