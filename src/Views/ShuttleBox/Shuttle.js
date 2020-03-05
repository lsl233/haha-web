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
        this.list = list.map((item, index) => {
            item.idx = index
            return item
        })
        this.checkedList = checkedList
        this.options.change(this.list, this.checkedList)
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
        this.checkedList.push(item)
        this.options.change([...this.list], [...this.checkedList])
    }

    uncheck(idx) {
        const item = this.checkedList[idx]
        this.checkedList.splice(idx, 1)
        let startIdx = item.idx
        this.list.push(item)
        this.list.splice(item.idx, 0, item)
        this.options.change([...this.list], [...this.checkedList])
    }
}

export default Shuttle