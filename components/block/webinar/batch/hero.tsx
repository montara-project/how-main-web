import { ASSETS } from '@/lib/constants/assets'

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 items-center justify-center gap-8 py-10 lg:grid-cols-2">
      <img
        src={ASSETS.WEBINAR_BATCH_IMAGE}
        alt="House of Wizard private course batch"
        className="h-auto w-full rounded-3xl border border-border shadow-lg"
        width={1200}
        height={800}
      />

      <div className="text-center lg:text-right">
        <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
          Private Cohort
        </p>
        <h1 className="mb-6 font-serif text-2xl font-bold tracking-wide text-foreground sm:text-4xl md:text-5xl">
          Become a Web3 Data Analyst
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Join our exclusive live private course and master the art of blockchain analytics. Limited
          spots available for <u>Batch 1.</u>
        </p>
      </div>
    </section>
  )
}
