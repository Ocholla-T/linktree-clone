import { type } from 'os'
import './index.scss'

type Props = {
  id: string
  type: string
  source?: string
}

const Link = ({ id, type, source }: Props) => {
  return (
    <a id={id} className='link' href={source}>
      {type}
    </a>
  )
}

export default Link
