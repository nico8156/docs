import Image from 'next/image';
import Link from 'next/link';

const CONTACT = {
	email: 'nmaldiney@gmail.com',
	linkedIn: 'https://www.linkedin.com/in/nicolas-maldiney-devweb'
}

export default function Home() {
	return (
		<div className="min-h-screen bg-[#0A0705] text-[#F4EDE6]">
			{/* NAV */}
			<header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
				<div className="text-sm font-semibold tracking-tight">
					Fragments — Backend Showcase
				</div>

				<div className="flex items-center gap-3">
					<Link
						href="/docs/services"
						className="rounded-full border border-[#2D231C] px-4 py-2 text-sm font-medium hover:bg-[#15100E] transition"
					>
						Services
					</Link>

					<Link
						href="/docs"
						className="rounded-full border border-[#2D231C] px-5 py-2 text-sm font-medium hover:bg-[#15100E] transition"
					>
						Documentation
					</Link>
				</div>
			</header>

			{/* HERO */}
			<main className="mx-auto max-w-6xl px-6 pb-32 pt-12">
				<section className="grid gap-20 lg:grid-cols-2 lg:items-center">
					{/* LEFT */}
					<div>
						<div
							className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
							style={{
								background: 'rgba(200,106,58,0.16)',
								color: '#C86A3A'
							}}
						>
							Java • Spring Boot • REST • Tests • Event-driven
						</div>

						<h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl leading-tight">
							Développer des backends{' '}
							<span style={{ color: '#C86A3A' }}>robustes et testés</span>.
						</h1>

						<p className="mt-6 text-lg text-[#B7A69A] leading-relaxed max-w-xl">
							Fragments est un projet backend Spring Boot orienté production :
							conception d’APIs REST, gestion explicite des erreurs, tests E2E,
							et structuration progressive vers des architectures plus avancées
							(CQRS, outbox transactionnelle).
						</p>

						<div className="mt-10 flex flex-col gap-4 sm:flex-row">
							<Link
								href="/docs/architecture/cqrs-outbox"
								className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
								style={{ backgroundColor: '#C86A3A' }}
							>
								Explorer l’architecture
							</Link>

							<Link
								href="/docs/appendix/trade-offs"
								className="rounded-full px-6 py-3 text-sm font-semibold border border-[#2D231C] hover:bg-[#15100E] transition"
							>
								Décisions & compromis
							</Link>

							<a
								href={`${CONTACT.linkedIn}`}
								target="_blank"
								rel="noreferrer"
								className="rounded-full px-6 py-3 text-sm font-semibold border border-[#2D231C] hover:bg-[#15100E] transition"
							>
								LinkedIn
							</a>
						</div>

						<div className="mt-12 grid gap-4 sm:grid-cols-2 text-sm text-[#8C7A70]">
							<Stat label="APIs REST" value="Structurées & sécurisées" />
							<Stat label="Persistance" value="JPA / PostgreSQL" />
							<Stat label="Delivery" value="Kafka + idempotence" />
							<Stat label="Tests" value="E2E + Testcontainers" />
						</div>
					</div>

					{/* RIGHT DEVICE */}
					<div className="relative flex justify-center">
						<div
							className="absolute h-[450px] w-[450px] rounded-full blur-3xl"
							style={{ background: 'rgba(200,106,58,0.15)' }}
						/>

						<div className="relative transform rotate-3 scale-[0.96] transition duration-700 hover:rotate-0 hover:scale-100">
							<div className="h-[620px] w-[300px] rounded-[42px] border border-[#2D231C] bg-black p-3 shadow-2xl">
								<div className="h-full w-full overflow-hidden rounded-[32px]">
									<Image
										src="/screens/map.png"
										alt="Fragments — mobile frontend"
										width={600}
										height={1200}
										className="object-cover"
										priority
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA CONTACT */}
				<section className="mt-36 border-t border-[#2D231C] pt-20">
					<h2 className="text-3xl font-semibold">Disponible pour CDI ou mission backend.</h2>

					<p className="mt-6 text-[#B7A69A] max-w-2xl">
						Profil backend Java / Spring Boot basé à Rennes.
						Autonome sur APIs REST, persistance SQL et tests d’intégration.
						Ouvert au présentiel ou remote.
					</p>

					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<a
							href={`mailto:${CONTACT.email}?subject=Fragments%20—%20Contact`}
							className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
							style={{ backgroundColor: '#C86A3A' }}
						>
							Me contacter
						</a>

						<Link
							href="/docs/cv"
							className="rounded-full px-6 py-3 text-sm font-semibold border border-[#2D231C] hover:bg-[#15100E] transition"
						>
							Voir mon CV (PDF)
						</Link>
					</div>

					<div className="mt-10 text-sm text-[#8C7A70]">
						LinkedIn :{' '}
						<a className="underline hover:text-[#B7A69A]" href={CONTACT.linkedIn} target="_blank" rel="noreferrer">
							nicolas-maldiney-devweb
						</a>{' '}
						· Email :{' '}
						<a className="underline hover:text-[#B7A69A]" href={`mailto:${CONTACT.email}`}>
							{CONTACT.email}
						</a>
					</div>
				</section>

				<footer className="mt-14 text-sm text-[#8C7A70]">
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<span>Fragments — Backend Java Showcase</span>
						<span className="text-xs">Next.js + Nextra</span>
					</div>
				</footer>
			</main>
		</div>
	)
}

function Stat({ label, value }: { label: string; value: string }) {
	return (
		<div className="rounded-2xl border border-[#2D231C] bg-[#15100E] p-4">
			<div className="text-xs text-[#8C7A70]">{label}</div>
			<div className="mt-1 font-medium text-[#F4EDE6]">{value}</div>
		</div>
	)
}
