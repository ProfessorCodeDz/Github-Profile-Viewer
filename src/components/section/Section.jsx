import React from 'react'
import './section.css'

export default function Section() {
  return (
    <section>
        <div className="left">
            <div className="image">
                <img src="https://cdn.pixabay.com/photo/2016/11/29/03/15/man-1867009_960_720.jpg" alt="img" />
            </div>
            <div className="green">
                <h2>FrontEnd Dev</h2>
                <div className="spinner">
                    <div className="blue">
                        <div className="white">
                        <img src="/github.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <h1>GITHUB<br/>PROFILE<br/>VIEWER</h1>
            <div className="btns">
                <button className="blue">OPEN</button>
                <button className="white">➜</button>
            </div>
        </div>
    </section>
  )
}
