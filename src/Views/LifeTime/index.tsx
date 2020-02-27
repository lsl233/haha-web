import React, { useState, useEffect } from 'react'
import LifeTime from './LifeTime'
import './style.scss'

const LifeTiView: React.FC = () => {
    const [dayOfYear, setDayOfYear] = useState<number>(0)
    const [currentDayOfYear, setCurrentDayOfYear] = useState<number>(0)
    const [currentYear, setCurrentYear] = useState<number>(0)
    
    useEffect(() => {
        const lifeTime = new LifeTime()
        setDayOfYear(lifeTime.getDayOfYear())
        setCurrentDayOfYear(lifeTime.getCurrentDayOfYear())
        setCurrentYear(lifeTime.getCurrentYear())
    }, [])

    function renderTimeBlock() {
        const arr = []
        for (let i = 0; i < dayOfYear; i++) {
            if (i < currentDayOfYear) {
                arr.push(<div key={i} className="history" />)
            } else if (i === currentDayOfYear) {
                arr.push(<div key={i} className="cureent" />)
            } else {
                arr.push(<div key={i} />)
            }
        }
        return arr
    }

    return (
        <div className="container">
            <article className=" life-time panel is-primary">
                <h3 className="title">{currentYear}年共有{dayOfYear}天</h3>
                <p className="subtitle">已经过了<b>{currentDayOfYear}</b>天, 剩余<b>{dayOfYear - currentDayOfYear}</b>天</p>
                <div className="time-block flex">
                    {renderTimeBlock()}
                </div>
            </article>
        </div>
    )
}

export default LifeTiView