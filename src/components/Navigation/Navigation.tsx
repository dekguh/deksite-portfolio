import { handleIconSocialMediaClick, iconButtonList, menuList } from './constants'

import logoNavigation from '@/assets/images/logo-navigation.svg'

import { twMerge } from 'tailwind-merge'

import IconButton from '../IconButton/IconButton'

const Navigation = () => {
  return (
    <div className={twMerge('flex flex-row flex-nowrap', 'items-center')} data-testid='navigation'>
      {/* logo */}
      <img
        className='w-[80px]'
        src={logoNavigation}
      />

      {/* list menu */}
      <ul className={twMerge(
        'flex-1 flex flex-row flex-nowrap',
        'items-center justify-end',
        'px-7 gap-x-7'
      )}>
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
      <div className={twMerge(
        'flex flex-row flex-nowrap',
        'items-center justify-end',
        'space-x-3'
      )}>
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
  )
}

export default Navigation