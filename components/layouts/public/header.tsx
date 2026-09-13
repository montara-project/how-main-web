'use client'

import { IconMenu2, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ASSETS } from '@/lib/constants/assets'
import { cn } from '@/lib/utils'
import { AuthSession } from '@/types/auth'

import { NavMenu } from './menu'
import Profile from './profile'

interface PublicHeaderProps {
  auth?: AuthSession | null
}

export default function PublicHeader({ auth }: PublicHeaderProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (link: string) => (link === '/' ? pathname === '/' : pathname.startsWith(link))

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="w-full border-b border-border/70 backdrop-blur-md"
        style={{ backgroundColor: 'var(--header-bg)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <img
                src={ASSETS.BRAND_LOGO}
                alt="House of Wizard"
                className="h-10 w-10"
                width={40}
                height={40}
              />
              <span className="font-serif text-lg font-semibold tracking-wide">
                House of Wizard
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {NavMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  aria-current={isActive(item.link) ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                    isActive(item.link)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden items-center gap-3 md:flex">
              <Profile auth={auth} />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
            >
              {open ? <IconX className="size-5" /> : <IconMenu2 className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div id="mobile-menu" className="border-t border-border/70 md:hidden">
            <div className="space-y-1 px-4 pt-2 pb-4">
              {NavMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  aria-current={isActive(item.link) ? 'page' : undefined}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors',
                    isActive(item.link)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2">
                <Profile auth={auth} isMobile />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
