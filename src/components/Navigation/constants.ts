import { TIconButtonItem, TIconButtonList, TMenuList } from './typed'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export const menuList : TMenuList = [
  { label: 'INTRO', href: '#intro' },
  { label: 'PROJECT', href: '#project' },
  { label: 'OPEN SOURCE', href: '#open-source' },
  { label: 'CONTACT ME', href: '#contact-me' },
]

export const iconButtonList : TIconButtonList = [
  { icon: GitHubIcon, href: 'https://github.com/dekguh' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dekguh/' },
]

export const handleIconSocialMediaClick = (item: TIconButtonItem) : void => {
  window.open(item.href, '_blank')
}