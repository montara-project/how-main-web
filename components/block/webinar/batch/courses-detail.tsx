import { GridPattern } from '@/components/ui/grid-pattern'
import { COURSE_DETAIL_FEATURES } from '@/data/mock-site'
import { cn } from '@/lib/utils'

export default function CoursesDetailSection() {
  return (
    <section className="relative mb-20 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-2xl font-semibold tracking-[0.08em] text-foreground sm:text-3xl">
          {"What You'll Get"}
        </h2>
        <div className="relative z-10 w-full py-6 sm:py-8">
          <CourseDetails />
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
          'mask-[radial-gradient(800px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
    </section>
  )
}

function CourseDetails() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {COURSE_DETAIL_FEATURES.map((feature, index) => (
        <div
          key={index}
          className="group relative flex items-start gap-4 rounded-2xl border border-border bg-card/80 p-6 shadow-xs backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
        >
          <div className="shrink-0 rounded-2xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20 transition duration-300 group-hover:bg-primary/15">
            <feature.icon className="size-6" />
          </div>
          <div>
            <h3 className="mb-1 font-serif text-lg font-semibold tracking-wide text-foreground">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
