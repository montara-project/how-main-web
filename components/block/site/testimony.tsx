import { IconBrandTwitter } from '@tabler/icons-react'
import React from 'react'

import { Marquee } from '@/components/ui/marquee'
import { TESTIMONIALS } from '@/data/mock-site'
import { cn } from '@/lib/utils'

type ReviewCardProps = React.ComponentPropsWithoutRef<'figure'> & {
  name: string
  username: string
  quote: string
  image: string
}

function ReviewCard({ name, username, quote, image }: ReviewCardProps) {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-border bg-card/80 hover:bg-card',
        // dark styles
        'dark:border-border dark:bg-card/90 dark:hover:bg-card'
      )}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={image} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground">{name}</figcaption>
            <p className="text-xs text-muted-foreground">{username}</p>
          </div>
        </div>

        <IconBrandTwitter className="h-5 w-5 text-primary" />
      </div>
      <blockquote className="mt-2 text-sm text-foreground/90">{quote}</blockquote>
    </figure>
  )
}

export default function TestimonySection() {
  return (
    <section id="testimonials" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-wide text-foreground sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Join thousands of successful graduates
          </p>
        </div>

        <div className="relative overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {TESTIMONIALS.map((testimonial, index) => (
              <ReviewCard key={index} {...testimonial} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-muted/40"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-muted/40"></div>
        </div>
      </div>
    </section>
  )
}
