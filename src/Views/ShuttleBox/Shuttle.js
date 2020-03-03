class Status {
    constructor(initStatusCode = 0) {
        this.statusCode = initStatusCode
    }
    get code() {
        return this.statusCode
    }
    get none() {
        return this.statusCode === 0
    }
    get pendding() {
        return this.statusCode === 1
    }
    get success() {
        return this.statusCode === 2
    }
    get fail() {
        return this.statusCode === 3
    }
    get done() {
        return this.success || this.fail
    }

    update(status) {
        this.statusCode = status
    }

}


class Shuttle {
    constructor(list, checkedList, options) {
        this.options = Object.assign({
            change() { }
        }, options)
        this.list = list
        this.checkedList = checkedList
        this.options.change(this.list, this.checkedList)
    }

    get newList() {
        return [...this.list]
    }

    get newCheckedList() {
        return [...this.checkedList]
    }

    get checkedListWithId() {
        return this.checkedList.map(item => item.id)
    }

    get checkedListWithIdOfString() {
        return this.checkedListWithId.join(',')
    }

    filter(keyword) {
        const list = this.list.filter(item => item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
        this.options.change(list, this.newCheckedList)
    }

    check(idx) {
        const item = this.list[idx]
        this.list.splice(idx, 1)
        item.beforeIdx = idx
        this.checkedList.push(item)
        this.options.change(this.newList, this.newCheckedList)
    }

    uncheck(idx) {
        const item = this.checkedList[idx]
        this.checkedList.splice(idx, 1)
        if (item.beforeIdx >= 0) {
            this.list.splice(item.beforeIdx, 0, item)
        } else {
            this.list.push(item)
        }
        this.options.change(this.newList, this.newCheckedList)
    }
}

export default Shuttle