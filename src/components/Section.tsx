import React from "react";


interface SectionProps {
    children: React.ReactNode
}


export function Section({ children  }: SectionProps) {
    return (
        <section className="flex flex-col items-center justify-center gap-8 text-center md:flex-row">
            {children}
        </section>
    )
}