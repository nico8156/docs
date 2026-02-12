import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="min-h-screen bg-[#0A0705] text-[#F4EDE6]">
			{/* NAV */}
			<header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
				<div className="text-sm font-semibold tracking-tight">
					Fragments — Architecture Showcase
				</div>

				<Link
					href="/docs"
					className="rounded-full border border-[#2D231C] px-5 py-2 text-sm font-medium hover:bg-[#15100E] transition"
				>
					Documentation
				</Link>
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
							CQRS • Outbox • Event-Driven • Mobile Resilience
						</div>

						<h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl leading-tight">
							Concevoir des systèmes distribués{' '}
							<span style={{ color: '#C86A3A' }}>robustes</span>.
						</h1>

						<p className="mt-6 text-lg text-[#B7A69A] leading-relaxed max-w-xl">
							Fragments démontre une architecture orientée production :
							séparation write/read, outbox transactionnelle, WebSocket avec
							ACK, idempotence mobile et projections rebuildables.
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
								Voir les décisions
							</Link>
						</div>

						<div className="mt-12 grid gap-4 sm:grid-cols-2 text-sm text-[#8C7A70]">
							<Stat label="Write model" value="Isolé & transactionnel" />
							<Stat label="Read model" value="Optimisé mobile" />
							<Stat label="Delivery" value="At-least-once + idempotence" />
							<Stat label="Tests" value="E2E + Testcontainers" />
						</div>
					</div>

					{/* RIGHT — PREMIUM DEVICE */}
					<div className="relative flex justify-center">
						{/* halo */}
						<div
							className="absolute h-[450px] w-[450px] rounded-full blur-3xl"
							style={{ background: 'rgba(200,106,58,0.15)' }}
						/>

						{/* device wrapper */}
						<div className="relative transform rotate-3 scale-[0.96] transition duration-700 hover:rotate-0 hover:scale-100">
							<div className="h-[620px] w-[300px] rounded-[42px] border border-[#2D231C] bg-black p-3 shadow-2xl">
								<div className="h-full w-full overflow-hidden rounded-[32px]">
									<Image
										src="/screens/map.png"
										alt="Fragments map clustering"
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

				{/* FEATURE SECTION */}
				<section className="mt-36">
					<h2 className="text-3xl font-semibold">
						Contraintes réelles, solutions concrètes
					</h2>

					<div className="mt-16 grid gap-16 md:grid-cols-2">
						<Feature
							title="Vérification de ticket (OCR)"
							desc="Pipeline robuste avec validation serveur, idempotence et reprise automatique."
							image="/screens/ticket.png"
						/>

						<Feature
							title="Read model dénormalisé"
							desc="Projection rebuildable, versionnée, adaptée à la latence mobile."
							image="/screens/detail.png"
						/>
					</div>
				</section>

				{/* CTA FINAL */}
				<section className="mt-36 border-t border-[#2D231C] pt-20">
					<h2 className="text-3xl font-semibold">
						Architecture pensée pour durer.
					</h2>

					<p className="mt-6 text-[#B7A69A] max-w-2xl">
						Chaque décision est documentée. Chaque compromis est assumé.
						Ce projet illustre une capacité à concevoir des systèmes robustes,
						évolutifs et maintenables.
					</p>

					<div className="mt-10">
						<Link
							href="/docs"
							className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
							style={{ backgroundColor: '#C86A3A' }}
						>
							Accéder à la documentation complète
						</Link>
					</div>
				</section>
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

function Feature({
	title,
	desc,
	image
}: {
	title: string
	desc: string
	image: string
}) {
	return (
		<div>
			<div className="relative flex justify-center">
				<div
					className="absolute h-[350px] w-[350px] rounded-full blur-3xl"
					style={{ background: 'rgba(200,106,58,0.12)' }}
				/>

				<div className="relative transform rotate-2 scale-[0.97] transition duration-700 hover:rotate-0 hover:scale-100">
					<div className="h-[520px] w-[260px] rounded-[36px] border border-[#2D231C] bg-black p-3 shadow-xl">
						<div className="h-full w-full overflow-hidden rounded-[28px]">
							<Image
								src={image}
								alt={title}
								width={600}
								height={1200}
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>

			<h3 className="mt-8 text-xl font-semibold text-center">{title}</h3>
			<p className="mt-3 text-[#B7A69A] text-center max-w-md mx-auto">
				{desc}
			</p>
		</div>
	)
}
