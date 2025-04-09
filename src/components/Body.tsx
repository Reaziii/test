import React from "react"

interface BodyProps{
    children?: React.ReactNode
}
const Body:React.FC<BodyProps>= ({children})=>{
    return (
    <div className="min-h-screen bg-background">
        {children}
    </div>
    )
}

export default Body