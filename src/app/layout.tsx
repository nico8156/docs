import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: {
		default: 'Fragments — Architecture Showcase',
		template: '%s | Fragments — Nicolas Maldiney'
	},
	description:
		'Fragments est une démonstration d’architecture moderne : DDD, CQRS, Outbox transactionnelle, Event-Driven, WebSocket ACK et résilience mobile.',
	metadataBase: new URL('https://docs-fragments-nicolas-maldiney.vercel.app/'),
	openGraph: {
		title: 'Fragments — Architecture Showcase',
		description:
			'Conception de systèmes distribués robustes (DDD, CQRS, Event-Driven, Outbox).',
		url: 'https://docs-fragments-nicolas-maldiney.vercel.app/',
		siteName: 'Fragments',
		type: 'website'
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="fr">
			<body>{children}</body>
		</html>
	)
}
