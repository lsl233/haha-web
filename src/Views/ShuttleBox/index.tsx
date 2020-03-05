import React, { useEffect, useState } from 'react'
import Shuttle from './Shuttle'
import './style.scss'

interface ILanguages {
    id: string
    name: string
    afterIdx?: number
}

const data = [
    { id: 'a1', name: 'C' },
    { id: 'a2', name: 'C++' },
    { id: 'a3', name: 'C#' },
    { id: 'a4', name: 'Java' },
    { id: 'a6', name: 'JavaScript' },
    { id: 'a7', name: 'Python' },
    { id: 'a8', name: 'Lua' },
]

let handleCheck: (n: number) => void
let handleUncheck: (n: number) => void
let handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void

const System: React.FC = () => {
    const [languages, setLanguages] = useState<ILanguages[]>([])
    const [checkedLanguages, setCheckedLanguages] = useState<ILanguages[]>([])
    const [keyword, setKeyword] = useState<string>('')

    useEffect(() => {
        console.log('useEffect')
        const shuttle = new Shuttle(data, [], {
            // @ts-ignore
            change(list, checkedList) {
                setLanguages(list)
                setCheckedLanguages(checkedList)
            }
        })
        handleCheck = shuttle.check.bind(shuttle)
        handleUncheck = shuttle.uncheck.bind(shuttle)
        handleInputChange = function(e) {
            const val = e.target.value
            shuttle.filter(val)
            setKeyword(val)
        }
    }, [])

    return (
        <div className="container shuttle-box">
            <div className="columns">
                <div className="control column is-half">
                    <div className="columns">
                        <div className="control column is-half">
                            <article className="panel is-link">
                                <div className="panel-heading">
                                    穿梭框
                                </div>
                                <div className="panel-block">
                                    <p className="control has-icons-left">
                                        <input onChange={handleInputChange} value={keyword} className="input is-small" type="text" placeholder="Search" />
                                        <span className="icon is-left">
                                            <i className="fas fa-search" aria-hidden="true"></i>
                                        </span>
                                    </p>
                                </div>
                                {
                                    languages.map((language, index) => {
                                        return (
                                            <div key={index} onClick={() => handleCheck(index)} className="panel-block">
                                                {language.name}
                                            </div>
                                        )
                                    })
                                }
                            </article>
                        </div>
                        <div className="control column is-half">
                            <article className="panel is-success is-small">
                                <div className="panel-heading">
                                    选中的
                                </div>
                                <div className="panel-block">
                                    <p className="control has-icons-left">
                                        <input className="input is-small" type="text" placeholder="Search" />
                                        <span className="icon is-left">
                                            <i className="fas fa-search" aria-hidden="true"></i>
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
                    
                </div>
            </div>

        </div>
    )
}

export default System