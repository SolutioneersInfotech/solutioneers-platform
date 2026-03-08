import Link from 'next/link'
import React from 'react'
import "./button.scss";
export default function Button({ href = '/', text = 'Click Me' }: { href?: string, text?: string }) {
    return(
        <Link href = { href } className = 'btn' >
            { text }
        </Link>
    )
}
