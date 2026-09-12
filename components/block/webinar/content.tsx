'use client'

import { IconArrowRight, IconFilter, IconSearch } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { Input, InputWrapper } from '@/components/ui/input'
import { usePaginationQuery } from '@/hooks/use-pagination-query'
import { queries } from '@/lib/api/queries'
import { AuthSession } from '@/types/auth'

import { WebinarCard, WebinarCardSkeleton } from './webinar-card'

interface WebinarContentProps {
  auth?: AuthSession | null
}

export default function WebinarContent({ auth }: WebinarContentProps) {
  const { offset, limit } = usePaginationQuery()

  const {
    data: webinarResponse,
    isLoading,
    isFetching,
  } = useQuery(queries.webinars.list({ offset, limit }))

  const loading = isLoading || isFetching
  const webinars = useMemo(() => {
    if (webinarResponse?.data && webinarResponse.data.length > 0) {
      return webinarResponse.data
    }

    return []
  }, [webinarResponse])

  const isAuth = useMemo(() => {
    if (auth?.user) {
      return true
    }
    return false
  }, [auth])

  const renderContent = () => {
    if (loading) {
      return Array.from({ length: 3 }, (_, index) => <WebinarCardSkeleton key={index} />)
    }

    if (webinars.length > 0) {
      return webinars.map((webinar) => (
        <WebinarCard
          key={webinar.id}
          title={webinar.title}
          description={webinar.description}
          slug={webinar.slug}
          speaker={webinar.speakers}
          participants={webinar.total_participant}
          date={webinar.start_date ? new Date(webinar.start_date) : undefined}
          isLive={false}
          isRecording={Boolean(webinar.recording_url)}
          isAuth={isAuth}
        />
      ))
    }

    return (
      <div className="col-span-full flex flex-col items-center gap-3 py-20 text-center">
        <p className="font-serif text-xl font-semibold text-foreground">No webinars found</p>
        <p className="text-sm text-muted-foreground">
          New sessions are announced soon — explore the private cohort in the meantime.
        </p>
        <Button variant="outline" className="mt-2" asChild>
          <Link href="/webinar/batch">
            <span>View the Private Cohort</span>
            <IconArrowRight />
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <p className="text-center text-xs font-semibold tracking-[0.3em] text-gold uppercase">
          Live Sessions
        </p>
        <h1 className="mt-3 text-center font-serif text-4xl font-bold tracking-wide text-foreground sm:text-5xl">
          Webinar
        </h1>
        <h4 className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          To become a greater wizard, learn how to analyze Web3 data and start your career in the
          decentralized future.
        </h4>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <Button variant={'outline'} className="h-10">
          <IconFilter className="h-5 w-5" />
          <span>Filter</span>
        </Button>
        <InputWrapper className="h-10">
          <IconSearch />
          <Input type="text" placeholder="Search..." />
        </InputWrapper>
      </div>

      <div className="mt-8 grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {renderContent()}
      </div>
    </section>
  )
}
