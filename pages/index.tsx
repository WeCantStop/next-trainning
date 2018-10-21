import Link from 'next/link'

const Index = () => (
  <div>
    <p>Home Page</p>
    <Link href="/about">
      <a>Go About</a>
    </Link>
  </div>
)

export default Index
