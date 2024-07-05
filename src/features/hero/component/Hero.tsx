import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

import { twMerge } from 'tailwind-merge'

const Hero = () => {
  return (
    <div className={twMerge(
      'flex flex-col flex-nowrap items-center gap-8',
      'md:flex-row md:gap-14'
    )}>
      {/* left */}
      <HeroLeft />

      {/* right */}
      <HeroRight />
    </div>
  )
}

export default Hero