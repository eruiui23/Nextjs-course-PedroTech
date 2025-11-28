import { notFound } from "next/navigation";

async function fetchUser(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) {
        return null;
    }
    const user = await res.json()
    return user;
}

function Body({userId, user} : any) {
    if (!user) {
        notFound()
    }
    return (
        <div>
            <h1 style={{color:"red"}}>jadi ini itu page use dengan id : {userId}</h1>
            <br />
            <p>nama : {user.name}</p>
            <p>email : {user.email}</p>
            <p>phone : {user.phone}</p>
            <p>web : {user.website}</p>
        </div>
    )
}

export default async function UsersPage({ params: params }: { params: Promise<{ userId: string }>; }) {
    const { userId } = await params
    const user = await fetchUser(userId)

    return (
        <Body userId={userId} user={user}/>
    )
}