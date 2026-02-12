import nextra from 'nextra'
import { remarkMermaid } from '@theguild/remark-mermaid'

const withNextra = nextra({
	contentDirBasePath: '/docs',
	mdxOptions: {
		remarkPlugins: [remarkMermaid]
	}
})

export default withNextra({})
