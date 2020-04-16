import React, { useEffect, useState } from 'react'
import Transfer, { ITransferListItem, ListItem } from './Transfer'
import './style.scss'

interface IProps {
    list: ListItem[]
    onChange?(checkList: ITransferListItem[]): void
}

let handleCheck: (n: number) => void
let handleUncheck: (n: number) => void
let handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = () => {}

const TransferBox: React.FC<IProps> = (props) => {
    const [languages, setLanguages] = useState<ITransferListItem[]>([])
    const [checkedLanguages, setCheckedLanguages] = useState<ITransferListItem[]>([])
    const [leftKeyword, setLeftKeyword] = useState<string>('')

    useEffect(() => {
        const transfer = new Transfer(props.list, [], {
            change(list, checkedList) {
                setLanguages(list)
                setCheckedLanguages(checkedList)
                props.onChange && props.onChange(checkedList)
            }
        })
        handleCheck = transfer.check.bind(transfer)
        handleUncheck = transfer.uncheck.bind(transfer)
        handleInputChange = function (e) {
            const val = e.target.value
            transfer.leftFilter(val)
            setLeftKeyword(val)
        }
    }, [props, props.list])

    return (
        <div className="columns">
            <div className="control column is-half">
                <article className="panel is-link">
                    <div className="panel-heading">穿梭框</div>
                    <div className="panel-block">
                        <p className="control has-icons-left">
                            <input onChange={handleInputChange} value={leftKeyword} className="input is-small" type="text" placeholder="Search" />
                            <span className="icon is-left">
                                <i className="fas fa-search" aria-hidden="true"/>
                            </span>
                        </p>
                    </div>
                    {
                        languages.map((language, index) => {
                            return (
                                <div key={index} onClick={() => handleCheck(index)} className={`panel-block ${language.show ? 'show' : 'hide'}`}>
                                    {language.name}
                                </div>
                            )
                        })
                    }
                </article>
            </div>
            <div className="control column is-half">
                <article className="panel is-success is-small">
                    <div className="panel-heading">选中的</div>
                    <div className="panel-block">
                        <p className="control has-icons-left">
                            <input className="input is-small" type="text" placeholder="Search" />
                            <span className="icon is-left">
                                <i className="fas fa-search" aria-hidden="true"/>
                            </span>
                        </p>
                    </div>
                    {
                        checkedLanguages.map((language, index) => (
                            <div key={language.id} onClick={() => handleUncheck(index)} className="panel-block">
                                {language.name}
                            </div>
                        ))
                    }
                </article>
            </div>
        </div>
    )
}

export default TransferBox
