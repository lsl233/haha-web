import React, { useState, useEffect } from 'react'
import LifeTime from './LifeTime'
import './style.scss'

const About: React.FC = () => {
    const [dayOfYear, setDayOfYear] = useState<number>(0)
    const [currentDayOfYear, setCurrentDayOfYear] = useState<number>(0)
    useEffect(() => {
        const lifeTime = new LifeTime()
        setDayOfYear(lifeTime.getDayOfYear())
        setCurrentDayOfYear(lifeTime.getCurrentDayOfYear())
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
                <h3 className="title">今年共有{dayOfYear}天</h3>
                <p className="subtitle">已经使用{currentDayOfYear}天</p>
                <div className="time-block flex">
                    {renderTimeBlock()}
                </div>
            </article>
        </div>
    )
}

export default About