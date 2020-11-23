import React from 'react'

function Display({time}) {
    return (
        <div>
            {(time.h >= 10)? time.h : "0" + time.h}: 
            {(time.m >= 10)? time.m : "0" + time.m}:
            {(time.s >= 10)? time.s : "0" + time.s}:
            {(time.ms >= 10)? time.ms : "0" + time.ms}
        </div>
    )
}

export default Display
