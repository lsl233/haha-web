class LifeTime {
    private date: Date
    private readonly currentYear: number
    private readonly dayOfYear: number
    private readonly currentDayOfYear: number
    
    constructor() {
        this.date = new Date()
        this.currentYear = this.date.getFullYear()
        this.dayOfYear = LifeTime.isCommonYear(this.currentYear) ? 366 : 365
        const timeMap = new Date().getTime() - new Date(this.currentYear.toString()).getTime()
        this.currentDayOfYear = Math.ceil(timeMap / 86400000) + 1
    }
    getDayOfYear(): number {
        return this.dayOfYear
    }
    getCurrentDayOfYear(): number {
        return this.currentDayOfYear
    }
    getCurrentYear() {
        return this.currentYear
    }

    static isCommonYear(year: number) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
    }
}

export default LifeTime