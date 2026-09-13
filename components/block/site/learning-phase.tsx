import { IconArrowRight, IconCheck, IconSparkles } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { GridPattern } from '@/components/ui/grid-pattern'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { cn } from '@/lib/utils'

export default function LearningPhaseSection() {
  return (
    <section id="learning-phase" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-wide text-foreground sm:text-4xl">
            Choose Your Learning Phase
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Choose the plan that&apos;s right for you.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          <LearningCard
            title="Early Bird"
            description="Limited time offer for first 20 students"
            highlight
            features={[
              { text: '16 weeks live training' },
              { text: 'Personal mentorship' },
              { text: 'Project portfolio' },
              { text: 'Career support' },
              { text: 'Lifetime community access' },
              { text: 'Certificate of completion' },
            ]}
          />

          <LearningCard
            title="Regular"
            description="For serious analysts ready to level up"
            disabled
            features={[
              { text: '24 weeks live training' },
              { text: 'Personal mentorship ( 1:1 sessions )' },
              { text: 'Project portfolio' },
              { text: 'Career support ( Partner )' },
              { text: 'Lifetime community access' },
              { text: 'Certificate of completion' },
            ]}
          />
        </div>
      </div>

      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 6],
          [10, 15],
          [16, 11],
          [14, 8],
          [17, 9],
        ]}
        className={cn(
          '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
    </section>
  )
}

type Feature = {
  text: string
}

type LearningCardProps = {
  features: Feature[]
  title: string
  description: string
  highlight?: boolean
  disabled?: boolean
}

function LearningCard({
  features,
  title,
  description,
  highlight = false,
  disabled = false,
}: LearningCardProps) {
  function renderButton() {
    if (disabled) {
      return (
        <Button
          className="h-11 w-full rounded-xl px-4 py-3 text-sm font-semibold transition-colors"
          disabled={disabled}
        >
          Coming Soon
        </Button>
      )
    }

    return (
      <Link href="/webinar/batch" className="inline-flex w-full items-center justify-center">
        <RainbowButton className="h-11 w-full gap-2 rounded-xl">
          <span>Join Now</span>
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </RainbowButton>
      </Link>
    )
  }

  return (
    <div
      className={cn(
        'relative z-10 flex h-full flex-col rounded-2xl border bg-card/80 p-[1px] backdrop-blur transition-all duration-300',
        highlight
          ? 'border-primary/40 shadow-[0_0_40px_-12px_var(--glow-a)]'
          : 'bg-border/40 hover:shadow-lg'
      )}
    >
      {highlight && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-xs font-semibold tracking-wider text-primary-foreground uppercase">
          <IconSparkles className="h-3.5 w-3.5" />
          Enrollment Open
        </span>
      )}
      <div className="flex grow flex-col rounded-[calc(1rem-1px)] p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="mb-2 font-serif text-xl font-bold tracking-wide text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Features */}
        <div className="grow">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <IconCheck
                  className={cn(
                    'mt-0.5 h-5 w-5 shrink-0',
                    highlight ? 'text-gold' : 'text-muted-foreground/60'
                  )}
                />
                <span className="text-sm font-medium text-foreground/80">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-8">{renderButton()}</div>
      </div>
    </div>
  )
}
