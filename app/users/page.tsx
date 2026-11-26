import Link from "next/link";
import { getUsers } from "../services/users"

export default async function Page() {
    const users = await getUsers();

    return(
        <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-7 p-2">
            {users.map((user) => (
                <UserCard key={user.id} user={user}  />
            ))}
        </div>
    )
}

function UserCard({ user }: { user: { name: string, username: string } }) {
    return(
        <div className="flex items-center bg-white p-5 gap-2 rounded-2xl shadow-sm">
            <div className="flex uppercase select-none items-center justify-center bg-cyan-500 text-cyan-900 font-bold text-3xl rounded-full size-16">
                {user.name[0]}
            </div>
            <div className="">
                <Link href={`/users/${user.username}`} className="font-bold text-cyan-900 cursor-pointer hover:underline"> {user.name} </Link>
                <p className="text-lime-600"> {user.username} </p>
            </div>
        </div>
    )
}