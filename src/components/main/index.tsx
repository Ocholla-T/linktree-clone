import { FC } from 'react'
import ProfileSection from './profile-section'

type MainProps = {}

const Main: FC<MainProps> = () => {
  return (
    <main className='main'>
      <ProfileSection />
    </main>
  )
}

export default Main
