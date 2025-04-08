import React from "react"

interface MainProps {
    children: React.ReactNode
}

export function Main({children}: MainProps){
    return(
        <main className="container mx-auto px-8 py-10">
            {children}
        </main>
    )
}