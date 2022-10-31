import { FC } from 'react'
import ProfileSection from './profile-section'
import './index.scss'
import LinkSection from '@components/main/links-section'

type MainProps = {}

const Main: FC<MainProps> = () => {
  return (
    <main className='main'>
      <ProfileSection />
      <LinkSection />
    </main>
  )
}

export default Main
