import Link from 'next/link'

const About = () => {
  return (
    <div>
      <div>About Page</div>
      <Link href="/index">
        <a>Go home</a>
      </Link>
    </div>
  )
}

export default About
