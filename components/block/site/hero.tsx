import { IconArrowRight, IconBinary, IconChartLine, IconDatabase } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ShineBorder } from '@/components/ui/shine-border'
import { SparklesText } from '@/components/ui/sparkles-text'
import { ASSETS } from '@/lib/constants/assets'

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 text-center">
          <div className="space-y-6">
            <div className="flex justify-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold-soft px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-gold-foreground uppercase">
                Web3 Data Analyst School
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-2xl bg-card md:shadow-xl">
                <ShineBorder
                  borderWidth={2}
                  duration={14}
                  shineColor={['#8B5CF6', '#F59E0B', '#C084FC']}
                />
                <img
                  src={ASSETS.BRAND_LOGO}
                  alt="House of Wizard"
                  className="z-10 h-40 w-40 object-contain"
                  width={160}
                  height={160}
                />
              </div>
              <SparklesText className="font-serif text-4xl font-bold tracking-wide text-foreground sm:text-6xl">
                House of Wizard
              </SparklesText>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Transform blockchain data into actionable insights. Learn how to analyze Web3 data
                and start your career in the decentralized future.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/webinar/batch" className="inline-flex items-center justify-center">
              <RainbowButton className="h-12 w-full gap-2 rounded-xl px-8 sm:w-auto">
                <span className="font-serif font-semibold tracking-wider">Join Private</span>
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </RainbowButton>
            </Link>

            <Button
              variant="outline"
              className="h-12 w-full gap-2 rounded-xl px-8 font-medium shadow-sm transition duration-300 hover:shadow-lg sm:w-auto"
            >
              <span className="font-serif text-base font-semibold tracking-wider">
                View Courses
              </span>
            </Button>
          </div>

          <div className="flex flex-col justify-center gap-6 pt-2 sm:flex-row sm:gap-10">
            {[
              { icon: IconDatabase, label: 'Blockchain Data' },
              { icon: IconChartLine, label: 'DeFi Analytics' },
              { icon: IconBinary, label: 'Smart Contract Analysis' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
