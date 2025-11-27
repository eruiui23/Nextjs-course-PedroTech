export default async function UsersPage({ params: params }: { params: Promise<{ userId: string }>; }) {
    const { userId } = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);


    const user = await res.json()

    console.log(user)
    return (
        <div>
            <h1>jadi ini itu page use dengan id : { userId }</h1>
            <p>nama : {user.name}</p>

        </div>
    )
}