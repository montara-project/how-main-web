'use client'

import Link from 'next/link'

import { ASSETS } from '@/lib/constants/assets'

import { FooterMenu } from './menu'

export default function PublicFooter() {
  return (
    <footer className="text-[var(--footer-fg)]" style={{ backgroundColor: 'var(--footer-bg)' }}>
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={ASSETS.BRAND_LOGO}
                alt="House of Wizard"
                className="h-10 w-10"
                width={40}
                height={40}
              />
              <span className="font-serif text-xl font-bold tracking-wide text-white">
                House of Wizard
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed opacity-80">
              Empowering the next generation of Web3 data analysts through comprehensive online
              education.
            </p>
            <div className="flex gap-2 pt-1">
              {FooterMenu.socialMedia.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-[var(--gold)]/40 hover:bg-white/10 hover:text-[var(--gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold tracking-wide text-white">
              Course Categories
            </h3>
            <ul className="space-y-2.5">
              {FooterMenu.courseCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-sm opacity-80 transition-opacity hover:text-[var(--gold)] hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {FooterMenu.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 transition-opacity hover:text-[var(--gold)] hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-serif text-base font-semibold tracking-wide text-white">
              Support
            </h3>
            <ul className="space-y-2.5">
              {FooterMenu.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm opacity-80 transition-opacity hover:text-[var(--gold)] hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm opacity-70">
              © {new Date().getFullYear()} House of Wizard. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm opacity-70">
                <Link href="/terms" className="transition-colors hover:text-[var(--gold)]">
                  Terms
                </Link>
                <Link href="/privacy" className="transition-colors hover:text-[var(--gold)]">
                  Privacy
                </Link>
                <Link href="/" className="transition-colors hover:text-[var(--gold)]">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
