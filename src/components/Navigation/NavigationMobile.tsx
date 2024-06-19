import { useState } from 'react'

import { handleIconSocialMediaClick, iconButtonList, menuList } from './constants'

import logoNavigation from '@/assets/images/logo-navigation.svg'

import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import { twMerge } from 'tailwind-merge'

import IconButton from '../IconButton/IconButton'

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleHamburgerClick = () : void => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative' data-testid='navigation-mobile'>
      <div className={twMerge('flex flex-row flex-nowrap', 'items-center')}>
        {/* logo */}
        <div className='flex-1 pr-8'>
          <img
            className='w-[80px]'
            src={logoNavigation}
          />
        </div>

        {/* HAMBURGER BUTTON */}
        <IconButton
          className={twMerge(
            'flex items-center justify-center overflow-hidden',
            'p-0 h-9 w-9 rounded-full relative',
            'border border-solid border-neutral-400'
          )}
          data-testid='hamburger-button'
          onClick={handleHamburgerClick}
        >
          <MenuIcon
            className={twMerge(
              'absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]',
              isOpen ? 'opacity-0' : 'opacity-100'
            )}
          />
          <MenuOpenIcon
            className={twMerge(
              'absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
          />
        </IconButton>
      </div>

      {/* menu */}
      <div
        className={twMerge(
          'bg-white rounded-md transition-all duration-[600ms]',
          'shadow-[0_0_12px_rgba(0,0,0,0.08)] overflow-hidden',
          'absolute top-12 left-0 right-0',
          isOpen ? 'max-h-[480px]' : 'max-h-0'
        )}
        data-testid='hamburger-menu'
      >
        {/* list menu */}
        <ul className={twMerge('flex flex-col flex-nowrap gap-y-4 px-6 py-4')}>
          {menuList.map((item, index) => (
            <li className='uppercase' key={index}>
              <a
                className={twMerge('duration-200 hover:text-yellow-500')}
                href={item.href}
              >{item.label}</a>
            </li>
          ))}
        </ul>

        {/* list social media */}
        <div className={twMerge('flex flex-row flex-nowrap', 'items-center space-x-3 px-6 pb-6')}>
          {iconButtonList.map((item, index) => (
            <IconButton
              className={twMerge(
                'flex items-center justify-center',
                'p-0 h-9 w-9 rounded-full',
                'border border-solid border-neutral-400'
              )}
              key={index}
              onClick={() => handleIconSocialMediaClick(item)}
            >
              <item.icon className='text-gray-600' fontSize='small' />
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavigationMobile