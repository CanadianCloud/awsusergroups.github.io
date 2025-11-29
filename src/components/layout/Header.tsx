import { useState, useEffect } from 'react'
import amazonLogo from '../../assets/logo_aws_ug.png'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Community Day', href: '#community-day' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Partners', href: '#partners' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show background when scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offset = 80 // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header 
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-black/30 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <img src={amazonLogo} alt="Amazon Logo" className="w-[140px] md:w-[165px]" />
          <nav className="hidden gap-6 lg:gap-8 text-sm font-normal lg:flex font-source-sans" >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="transition-colors hover:text-aws-orange cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

