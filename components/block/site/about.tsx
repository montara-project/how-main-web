import { FEATURES } from '@/data/mock-site'

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            House of Wizard
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight font-semibold tracking-wide text-foreground sm:text-5xl">
            The next generation of education for{' '}
            <span className="text-gradient-brand">Web3 Data Analysts</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-linear-to-r from-transparent via-primary/60 to-transparent" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We blend mastery-driven curriculum with studio-level mentorship so every learner can
            build with confidence, precision, and lasting impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: (typeof FEATURES)[0] }) {
  return (
    <div className="group h-full rounded-2xl border border-border bg-card/80 p-8 text-left shadow-xs backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
          <feature.icon className="h-6 w-6" strokeWidth={1.6} />
        </div>
        <span className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
          {feature.name}
        </span>
      </div>
      <h3 className="mt-6 font-serif text-xl font-semibold tracking-wide text-foreground">
        {feature.name}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
    </div>
  )
}
