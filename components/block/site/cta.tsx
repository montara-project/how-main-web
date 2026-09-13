import { IconArrowRight, IconSparkles } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--glow-a)] blur-3xl" />
        <div className="absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-[var(--glow-c)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-4 py-1 text-xs font-semibold tracking-wider text-gold-foreground uppercase">
              <IconSparkles className="h-4 w-4" />
              Opportunity
            </div>

            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-5xl">
              Become a Web3 Data Analyst with
              <span className="text-gradient-brand block font-bold">House of Wizard</span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Unlock the skills to interpret on-chain activity, DeFi flows, and token movements.
              Learn with real datasets, mentor feedback, and a career roadmap built for modern Web3
              analysts.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/webinar/batch" className="inline-flex">
                <RainbowButton className="h-12 gap-2 rounded-xl px-7">
                  <span className="font-serif font-semibold tracking-wider">Join the Cohort</span>
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </RainbowButton>
              </Link>
              <Link href="/webinar" className="inline-flex">
                <Button
                  variant="outline"
                  className="h-12 rounded-xl px-7 font-serif font-semibold tracking-wider"
                >
                  Explore Courses
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              {[
                'Live cohort sessions',
                'Portfolio-ready dashboards',
                'Web3 analyst mentorship',
              ].map((item) => (
                <span key={item} className="rounded-full border border-border bg-card/70 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-border bg-card/85 p-6 shadow-xl backdrop-blur">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gold">What you will master</p>
                  <h3 className="font-serif text-2xl text-foreground">
                    Learn the analyst stack end to end.
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {[
                    'On-chain data sourcing + SQL queries on real protocols.',
                    'DeFi metrics, token velocity, and TVL trend analysis.',
                    'Narrative building for investor-ready reports.',
                    'Weekly feedback from House of Wizard mentors.',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-accent/60 px-4 py-3"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl bg-primary/10 px-4 py-3 text-sm text-primary">
                  Spots are limited. Secure your place and start building a Web3 data career with
                  House of Wizard.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
