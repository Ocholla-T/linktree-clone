import { FC, useState } from 'react'
import profileImage from '@images/profile.jpg'
import cameraIcon from '@images/camera-outline.svg'
import shareIcon from '@images/share-icon.svg'
import './index.scss'
type ProfileProps = {
  name?: string
  image?: string
}

const ProfileSection: FC<ProfileProps> = ({ name, image }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false)

  return (
    <section className='profile'>
      <div
        id='profile__img'
        className='profile-image'
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseOut={() => setIsMouseEnter(false)}
      >
        <img
          src={profileImage}
          alt='This is your profile picture'
          className='profile-image_picture'
        />
        {isMouseEnter && (
          <img
            src={cameraIcon}
            alt='Add profile picture'
            className='profile-image_icon'
          />
        )}
      </div>
      <p className='profile-name'>{name}</p>
      <div className='profile-share_icon'>
        <img src={shareIcon} alt='share' />
      </div>
    </section>
  )
}

ProfileSection.defaultProps = {
  name: 'Annette Black',
  image: '../../../assets/profile.jpg',
}

export default ProfileSection
