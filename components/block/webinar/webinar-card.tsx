'use client'

import { IconArrowRight, IconLock, IconUsers } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from '@/components/ui/card'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { Skeleton } from '@/components/ui/skeleton'
import { formatDate } from '@/lib/date'

interface WebinarCardProps {
  title: string
  description: string
  participants: number
  speaker: string
  isLive?: boolean
  isPremium?: boolean
  isRecording?: boolean
  isAuth?: boolean
  slug: string
  date?: Date
  duration?: string
}

export function WebinarCard({
  title,
  description,
  participants,
  speaker,
  isLive = false,
  isPremium = false,
  isRecording = false,
  isAuth = false,
  slug,
  date,
  duration,
}: WebinarCardProps) {
  const renderDays = () => {
    if (isLive || date) {
      return `${formatDate(date!, 'dd/MM/yyyy HH:mm')} WIB`
    }

    if (duration) {
      return duration
    }

    return null
  }

  const renderButton = () => {
    if (!isAuth) {
      return (
        <Button className="h-10 w-full rounded-xl" variant="primary" asChild>
          <Link href="/sign-in">
            <span className="font-serif font-semibold tracking-wider">Sign In</span>
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      )
    }

    if (isLive) {
      return (
        <RainbowButton className="h-10 w-full gap-2 rounded-xl" asChild>
          <Link href={slug}>
            <span className="font-serif font-semibold tracking-wider">Join Now</span>
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </RainbowButton>
      )
    }

    if (isPremium) {
      return (
        <Button className="h-10 w-full" asChild>
          <Link href={`/webinar/watch/${slug}`}>
            <IconLock className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Buy Now</span>
          </Link>
        </Button>
      )
    }

    if (!isRecording) {
      return (
        <Button className="h-10 w-full" variant={'secondary'}>
          <span className="font-medium tracking-wide">No Recording</span>
        </Button>
      )
    }

    return (
      <Button className="h-10 w-full" variant="primary" asChild>
        <Link href={`/webinar/watch/${slug}`}>
          <span className="font-medium tracking-wide">Watch Recording</span>
        </Link>
      </Button>
    )
  }

  const schedule = renderDays()

  return (
    <Card className="h-full w-full" variant="accent">
      <CardHeader>
        <CardHeading>
          <CardTitle className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
            {speaker}
          </CardTitle>
        </CardHeading>
        <CardToolbar>
          <Button variant="outline" size="sm">
            <IconUsers className="text-primary" />
            <span>{participants}</span>
          </Button>
        </CardToolbar>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col py-2">
        <div className="min-h-24 flex-1 space-y-2">
          <p className="[display:-webkit-box] overflow-hidden text-base leading-snug font-semibold text-foreground [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {title}
          </p>
          <p className="[display:-webkit-box] overflow-hidden text-sm leading-relaxed text-muted-foreground [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
            {description}
          </p>
        </div>
        {schedule && (
          <div className="mt-6 flex items-center justify-between text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            <span>{duration ? 'Duration' : 'Schedule'}</span>
            <span className="text-sm font-medium text-foreground normal-case">{schedule}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-center">{renderButton()}</CardFooter>
    </Card>
  )
}

export function WebinarCardSkeleton() {
  return (
    <div className="h-full w-full rounded-2xl border border-border/70 bg-card p-5 shadow-xs">
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-30 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-6 w-56" />
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-60" />

        <div className="mt-4 flex flex-row justify-between">
          <Skeleton className="h-4 w-30" />
          <Skeleton className="h-4 w-20" />
        </div>

        <Skeleton className="mt-3 h-10 w-full" />
      </div>
    </div>
  )
}
