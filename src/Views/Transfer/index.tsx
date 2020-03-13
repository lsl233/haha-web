import React, { } from 'react'
import Transfer from '../../Components/Transfer'
import { ITransferListItem } from '../../Components/Transfer/Transfer'

const data = [
    { id: 'a1', name: 'C' },
    { id: 'a2', name: 'C++' },
    { id: 'a3', name: 'C#' },
    { id: 'a4', name: 'Java' },
    { id: 'a6', name: 'JavaScript' },
    { id: 'a7', name: 'Python' },
    { id: 'a8', name: 'Lua' },
]

const System: React.FC = () => {

    function handleChange (list: ITransferListItem[]) {
        console.log(list)
    }

    return (
        <div className="container shuttle-box">
            <div className="columns">
                <div className="control column is-half">
                    <Transfer list={data} onChange={handleChange} />
                </div>
            </div>

        </div>
    )
}

export default System