import Link from 'next/link'
import React from 'react'

export default function Button({ name, path, calssName }: { name: string, path: string, calssName?: string }) {
    return (
        <Link href={path} className={calssName} target='_blank'>
            {name}
        </Link>
    )
}
