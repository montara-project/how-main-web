import type { Metadata } from 'next'

import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import { DIRECT_CONTACTS } from '@/data/mock-site'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Contact | House of Wizard',
}

const contactFieldClass =
  'rounded-md border border-input bg-card px-4 py-2 text-sm text-foreground/80 shadow-sm transition outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30'

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-brand-canvas py-24 sm:py-28">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--glow-b)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--glow-a)] blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border-gold/30 bg-gold-soft px-4 py-1 font-serif text-xs font-medium tracking-[0.3em] text-gold-foreground uppercase">
            Contact House of Wizard
          </span>
          <div className="space-y-4">
            <h1 className="font-serif text-4xl leading-tight font-semibold tracking-normal text-foreground sm:text-5xl">
              Let&apos;s build clarity from web3 data.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Whether you&apos;re exploring a cohort, need guidance on analytics, or want to
              collaborate with the House of Wizard team, we&apos;re ready to listen.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:info@house-of-wizard.xyz"
              className="inline-flex items-center rounded-full border bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Email our team
            </a>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Learn about House of Wizard
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Send us a message
              </h2>
              <p className="mt-3 text-muted-foreground">
                Share the details of your inquiry and we will respond within one business day.
              </p>
              <form className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-foreground/80" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className={contactFieldClass}
                  />
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-foreground/80" htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@domain.com"
                      className={contactFieldClass}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-foreground/80" htmlFor="role">
                      Role or team
                    </label>
                    <input
                      id="role"
                      name="role"
                      placeholder="Data analyst, founder, DAO"
                      className={contactFieldClass}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-foreground/80" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className={contactFieldClass}
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex w-fit items-center rounded-full border bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-foreground">What we can help with</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Cohort enrollment and analyst readiness assessments.</li>
                <li>Custom training for protocol or DAO analytics teams.</li>
                <li>Research collaborations and on-chain data strategy.</li>
                <li>Community partnerships and event invitations.</li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-foreground">Direct channels</h3>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {DIRECT_CONTACTS.map((item) => (
                  <div key={item.name}>
                    <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      {item.name}
                    </p>

                    {item.href !== '#' ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-foreground underline decoration-gold underline-offset-4"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm tracking-wide text-foreground">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-foreground">Community pathway</h3>
              <p className="mt-3 text-muted-foreground">
                Join the House of Wizard community for peer reviews, research salons, and curated
                analyst discussions.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:border-primary/40 hover:text-primary"
              >
                Explore the community
              </Link>
            </div>

            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <Separator />
              <p className="mt-4 text-sm text-muted-foreground">
                Your data is handled with care. Review our{' '}
                <Link
                  href="/privacy"
                  className="font-semibold text-foreground underline decoration-gold underline-offset-4 transition hover:text-foreground/80"
                >
                  privacy commitments
                </Link>
                .
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}
