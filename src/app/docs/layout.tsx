import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import { getPageMap } from 'nextra/page-map'

export default async function DocsLayout({
	children
}: {
	children: React.ReactNode
}) {
	const pageMap = await getPageMap()

	return (
		<Layout
			navbar={<Navbar logo={<span className="font-semibold">Fragments</span>} />}
			pageMap={pageMap}
			footer={<Footer>Fragments — Docs</Footer>}
		>
			{children}
		</Layout>
	)
}

