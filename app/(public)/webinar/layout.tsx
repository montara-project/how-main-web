import type { PropsWithChildren } from 'react'

export default function WebinarLayout({ children }: PropsWithChildren) {
  return <div className="flex flex-col items-center justify-center">{children}</div>
}
