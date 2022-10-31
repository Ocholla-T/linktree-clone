//@ts-ignore
import Link from '@ui/link'
import './index.scss'
import links from './links.json'

const LinkSection = () => {
  return (
    <section className='links'>
      {links.map(({ id, type, source }) => (
        <Link id={id} type={type} source={source} key={id} />
      ))}
    </section>
  )
}

export default LinkSection
