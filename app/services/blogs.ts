import { blogs } from "@/db/schema"
import { desc, eq, ilike } from 'drizzle-orm';
import { db } from "@/db"


export const getBlogs = (filter: string = "") => {
  const cleanFilter = filter.trim()
  return db.query.blogs.findMany({
    where:  cleanFilter !== "" ? ilike(blogs.title, `%${cleanFilter}%`) : undefined,
    orderBy: desc(blogs.likes)
  })
}

export const addBlog = async(title: string, author: string, url: string) => {
  await db.insert(blogs).values({ title, author, url})
}

export const getBlogById = (id: number) => {
  return db.query.blogs.findFirst({
    where: eq(blogs.id, id)
  })
}

export const incrementLikes = async(id: number) => {
  const blog = await getBlogById(id)

  if (blog) {
    await db
      .update(blogs)
      .set({ likes: blog.likes + 1 })
      .where(eq(blogs.id, id))
  }
}

