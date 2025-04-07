import React from "react"

interface BodyProps{
    children?: React.ReactNode
}
const Body:React.FC<BodyProps>= ({children})=>{
    return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-100 via-gray-100 to-neutral-200">
        {children}
    </div>
    )
}

export default Body