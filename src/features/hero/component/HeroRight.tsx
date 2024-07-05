import HeroImage from '@/assets/images/hero-image.png'

import { twMerge } from 'tailwind-merge'

const HeroRight = () => {
  return (
    <div className={twMerge('w-full md:w-[65%]')}>
      <img className='w-full' src={HeroImage} />
    </div>
  )
}

export default HeroRight