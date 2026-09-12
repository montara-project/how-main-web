import { COURSE_CURRICULUM } from '@/data/mock-site'

export default function CurriculumSection() {
  return (
    <section className="relative mb-20 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-2xl font-semibold tracking-[0.08em] text-foreground sm:text-3xl">
          Course Curriculum
        </h2>
        <div className="relative z-10 space-y-4 sm:space-y-6">
          <Curriculum />
        </div>
      </div>
    </section>
  )
}

function Curriculum() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {COURSE_CURRICULUM.map((module, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-xs backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          <div className="relative flex items-start justify-between gap-4">
            <h3 className="font-serif text-lg font-semibold tracking-wide text-foreground sm:text-xl">
              {module.title}
            </h3>
            <span className="shrink-0 rounded-full bg-primary px-3 py-1 font-serif text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase">
              {module.week}
            </span>
          </div>
          <ul className="relative mt-4 space-y-2 text-sm text-muted-foreground">
            {module.topics.map((topic, topicIndex) => (
              <li key={topicIndex} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50"></span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
