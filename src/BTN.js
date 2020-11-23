import React from 'react'
import "./App.css"

function BTN({ start, status, stop, reset, resume }) {
    return (
        <div>
            {(status === 0) ?
                <button onClick={start} className="button">Start</button>
                : ""
            }
            {(status === 1) ?
                <div>
                    <button onClick={stop} className="button">Stop</button>
                    <button onClick={reset} className="button">Reset</button>
                </div>
                : ""
            }
            {(status === 2) ?
                <div>
                    <button onClick={resume} className="button">Resume</button>
                    <button onClick={reset} className="button">Reset</button>
                </div>
                : ""
            }

        </div>
    )
}

export default BTN
