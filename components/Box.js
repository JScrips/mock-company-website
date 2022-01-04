import React from 'react'

const Box = (props) => {
    return (
        <div className={`w-${props.w} h-${props.height} bg-orange-600 text-center flex items-center justify-center border-4 border-black`}>
            {props.name}
        </div>
    )
}

export default Box
