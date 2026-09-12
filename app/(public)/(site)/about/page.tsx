import type { Metadata } from 'next'

import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'About | House of Wizard',
}

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-brand-canvas py-24 sm:py-28">
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--glow-b)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--glow-a)] blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border-gold/30 bg-gold-soft px-4 py-1 font-serif text-xs font-medium tracking-[0.3em] text-gold-foreground uppercase">
            House of Wizard
          </span>
          <div className="space-y-4">
            <h1 className="font-serif text-4xl leading-tight font-semibold tracking-normal text-foreground sm:text-5xl">
              Elegant, rigorous education for web3 data analysts.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              We are a premium learning studio shaping the next generation of web3 data analysts.
              House of Wizard blends research-grade analytics, cohort mentorship, and community
              guidance so learners can turn on-chain signals into confident decisions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Join the community
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Our privacy approach
            </Link>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <h2 className="font-serif text-xl font-semibold text-foreground">Our mission</h2>
              <p className="mt-3 text-muted-foreground">
                We help analysts master blockchain data with confidence. From token flows to
                protocol health, we train you to ask sharper questions, build trusted dashboards,
                and deliver insights that move teams forward.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-foreground">What you learn</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>On-chain data modeling and analytics workflows.</li>
                <li>Protocol growth, retention, and cohort analysis.</li>
                <li>Research storytelling for product and community teams.</li>
                <li>Ethical use of data in emerging web3 ecosystems.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-foreground">How we deliver</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Mentor-led cohorts with live case walkthroughs.</li>
                <li>Research studio sessions for portfolio-ready insights.</li>
                <li>Community critiques and feedback loops.</li>
                <li>Tools and templates tailored for web3 analytics.</li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-foreground">Brand pillars</h3>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Craftsmanship:</span> elegant
                  analysis and meticulous data narratives.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Integrity:</span> transparent
                  methods and privacy-first learning.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Community:</span> a global network
                  of analysts, builders, and mentors.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <h3 className="text-lg font-semibold text-foreground">Community touchpoints</h3>
              <p className="mt-3 text-muted-foreground">
                We connect learners through curated circles and meaningful rituals that deepen
                skills and trust.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Weekly research salons and data discussions.</li>
                <li>Peer review lounges and portfolio feedback.</li>
                <li>Private events with web3 data leaders.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
              <Separator />
              <p className="mt-4 text-sm text-muted-foreground">
                Ready to turn insight into impact? Join House of Wizard and shape the future of web3
                analytics with us.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Experience
            </p>
            <p className="mt-3 text-2xl font-semibold text-foreground">Cohort-led learning</p>
            <p className="mt-2 text-muted-foreground">
              Small, high-touch cohorts focused on mastery and accountability.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Focus
            </p>
            <p className="mt-3 text-2xl font-semibold text-foreground">Web3 intelligence</p>
            <p className="mt-2 text-muted-foreground">
              We specialize in on-chain data, protocols, and ecosystem growth.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card/80 p-6 shadow-xs">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Outcomes
            </p>
            <p className="mt-3 text-2xl font-semibold text-foreground">Insight-ready portfolios</p>
            <p className="mt-2 text-muted-foreground">
              Graduate with case studies and dashboards that earn trust.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-[var(--footer-bg)] p-8 text-white shadow-md sm:p-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-[var(--gold)] uppercase">
              The invitation
            </p>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Join a community where analytics meets craft.
            </h2>
            <p className="text-[var(--footer-fg)] opacity-80">
              Whether you are leveling up or leading analytics at a protocol, House of Wizard is a
              home for thoughtful, ethical data builders. We would love to meet you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-card px-5 py-2.5 text-sm font-semibold text-card-foreground transition hover:bg-accent"
              >
                Apply for the next cohort
              </Link>
              <a
                href="mailto:info@house-of-wizard.xyz"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/60"
              >
                Talk with the team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
