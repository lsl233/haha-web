export interface ListItem {
    [key: string]: any
}

export interface ITransferListItem extends ListItem {
    idx: number
    show: boolean
}

export interface IOptions {
    change(list: ITransferListItem[], checkedList: ITransferListItem[]): void

    keyOfId?: string,
    keyOfName?: string
}

class Transfer {
    list: ITransferListItem[]
    checkedList: ITransferListItem[]
    options: IOptions

    constructor(
        list: ListItem[],
        checkedList: ITransferListItem[],
        options: IOptions
    ) {
        this.options = options
        this.list = Transfer.list2ByIdx(list)
        this.checkedList = checkedList
        this.options.change(this.list, this.checkedList)
    }

    get checkedListWithId() {
        return this.checkedList.map(item => item[this.options.keyOfId || 'id'])
    }

    get checkedListWithIdOfString() {
        return this.checkedListWithId.join(',')
    }

    static list2ByIdx(list: ListItem[]): ITransferListItem[] {
        const result: ITransferListItem[] = []

        for (let i = 0, l = list.length; i < l; i++) {
            const item = list[i]
            item.idx = i
            item.show = true
            result.push(item as ITransferListItem)
        }
        return result
    }

    filter(list: ITransferListItem[], keyword: string) {
        return list.map(item => {
            item.show = item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            return item
        })
    }

    leftFilter(keyword: string) {
        const list = this.filter(this.list, keyword)
        this.options.change(list, [...this.checkedList])
    }

    rightFilter(keyword: string) {
        const checkedList = this.filter(this.checkedList, keyword)
        this.options.change([...this.list], checkedList)
    }

    check(idx: number) {
        const item = this.list[idx]
        this.list.splice(idx, 1)
        this.checkedList.push(item)
        this.options.change([...this.list], [...this.checkedList])
    }

    uncheck(idx: number) {
        const item = this.checkedList[idx]
        this.checkedList.splice(idx, 1)
        this.list.splice(this.getPosition(item.idx || 0), 0, item)
        this.options.change([...this.list], [...this.checkedList])
    }

    static isExist<T>(value: T): boolean {
        return value !== undefined && value !== null
    }

    getPosition(idx: number) {
        if (idx === 0) return idx
        const length = this.list.length
        for (let i = 0; i < length; i++) {
            const item = this.list[i]
            if (item.idx && item.idx > idx) {
                return i
            }
        }
        return length
    }
}

export default Transfer
