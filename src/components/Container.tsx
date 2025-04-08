import React from "react"

interface ContainerProps {
    children: React.ReactElement
}

export function Container({ children }: ContainerProps) {
    return (
        <div className="flex ">
            {children}
        </div>
    )
}