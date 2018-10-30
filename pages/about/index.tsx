import Link from 'next/link'
import './index.scss'

const About = () => {
  return (
    <div>
      <div>About Page</div>
      <Link href="/home/home">
        <a className="example">Go home</a>
      </Link>
    </div>
  )
}

export default About
