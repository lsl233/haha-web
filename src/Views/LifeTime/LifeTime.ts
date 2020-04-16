class LifeTime {
    private date: Date
    readonly currentYear: number
    readonly dayOfYear: number
    readonly currentDayOfYear: number

    constructor() {
        this.date = new Date()
        this.currentYear = this.date.getFullYear()
        this.dayOfYear = LifeTime.isCommonYear(this.currentYear) ? 366 : 365
        const timesMap = new Date().getTime() - new Date(this.currentYear.toString()).getTime()
        this.currentDayOfYear = Math.ceil(timesMap / 86400000) + 1
    }

    static isCommonYear(year: number) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
    }
}

// factory
export default LifeTime
