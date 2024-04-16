import Link from 'next/link'
import React from 'react'

export default function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<Link href={href} className="text-link hover:underline">
			{children}
		</Link>
	)
}
