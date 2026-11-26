import Link from "next/link";
import { getBlogs } from "../services/blogs";
import { searchBlog } from "../actions/blogs";

export type Blog = {
    id: number;
    author: string;
    title: string;
    url: string;
    likes: number;
}

export default async function Page({ searchParams }: { searchParams: Promise<{ filter: string }> }) {
    const { filter } = await searchParams;
    const blogs = await getBlogs(filter);

    return (
        <div className="flex flex-col">
            <h1 className="text-3xl text-cyan-950 mb-7 font-bold text-center">Blogs</h1>
            <Search className="w-2/5 mx-auto mb-7" defaultValue={filter} />

            <div className="bg-white shadow-sm rounded-2xl px-3">
                {blogs.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

        </div>
    )
}

function Search({ defaultValue, className }: { defaultValue: string, className: string }) {
    return (
        <form action={searchBlog}>
            <div className={`flex gap-2 items-center px-3 ${className}`}>
                <input
                    type="text"
                    name="filter"
                    defaultValue={defaultValue}
                    autoComplete="off"
                    placeholder=" Blog title..."
                    className="bg-white shadow-sm border border-gray-100 w-full p-1.5 rounded-md focus:outline-cyan-800"
                />
                <button type="submit" className="cursor-pointer bg-cyan-900 text-white text-lg border border-slate-300 py-1 px-3 rounded-md ">
                    Search
                </button>
            </div>
        </form>
    )
}

export function BlogCard({ blog }: { blog: Blog }) {
    const { id, author, title, likes } = blog;

    return (
        <Link href={`/blogs/${id}`} className="group flex flex-col border-b border-slate-300 my-4 p-3 cursor-pointer">
            <p className="text-2xl text-cyan-900 group-hover:text-cyan-800 transition-colors">
                {title}
            </p>
            <p className="text-lime-600 group-hover:text-lime-500 transition-colors">
                {author}
            </p>
            <p className="text-slate-700 group-hover:text-slate-500 transition-colors">
                {likes} likes
            </p>
        </Link>
    )
}

