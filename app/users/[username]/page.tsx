import { Blog, BlogCard } from "@/app/blogs/page";
import { getUser } from "@/app/services/users";
import Link from "next/link";
import { notFound } from "next/navigation";

interface User {
    id: number;
    name: string;
    username: string;
    blogs: Blog[]
}

export default async function Page({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;
    const user = await getUser(username);

    if (!user) {
        notFound()
    }

    return (
        <div className="flex flex-col">
            <Link href={"/users"} className="mb-0.5 w-fit hover:underline text-slate-500 hover:text-slate-600">
                {"< back"}
            </Link>
            <UserInfo user={user} />

            {user.blogs.length !== 0 && (
                <div className="bg-white rounded-2xl px-3 pt-1 mt-5 shadow-sm">
                    {user.blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            )}
        </div>
    )
}


function UserInfo({ user }: { user: User }) {
    return (
        <div className="flex p-5 bg-white shadow-sm rounded-2xl gap-5">
            <div className="grid content-center place-items-center bg-cyan-500 text-cyan-900 uppercase size-20 text-5xl font-semibold rounded-full select-none">
                {user.name[0]}
            </div>

            <div className="my-auto">
                <p className="text-3xl font-semibold text-cyan-900 mb-2">
                    {user.name}
                </p>

                <div className="flex gap-2 text-xl">
                    <p className="text-lime-600"> {user.username} </p>
                    <span className="text-slate-300">{" | "}</span>
                    <p className="text-slate-600">  {user.blogs.length} blogs saved</p>
                </div>
            </div>
        </div>
    )
}