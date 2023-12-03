import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apply | Blog"
}

export default function Blog() {
  return (
    <main>
      <div className='flex items-center justify-center h-screen'>
        <h1>Blog</h1>
      </div>
    </main>
  )
}

