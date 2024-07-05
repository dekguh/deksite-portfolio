import Button from '@/components/Button/Button'
import Typography from '@/components/Typography/Typography'

import { twMerge } from 'tailwind-merge'

const HeroLeft = () => {
  const handleDownloadCvClick = () : void => {
    window.open('#')
  }

  return (
    <div className={twMerge('w-full md:w-[45%]')}>
      <Typography
        className={twMerge('text-green-600 mb-2')}
        component='h5'
      >
        Hello i’m Kadek.
      </Typography>

      <Typography
        className={twMerge(
          'text-gray-900 text-4xl/snug font-bold mb-5',
          'md:text-4xl/snug lg:text-7xl/snug'
        )}
        component='h1'
      >
        Interested Learn <Typography
          className={twMerge(
            'bg-clip-text text-transparent',
            'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'
          )}
          component='span'
        >
            Something
        </Typography> New Technology
      </Typography>

      <Button onClick={handleDownloadCvClick}>Download CV</Button>
    </div>
  )
}

export default HeroLeft