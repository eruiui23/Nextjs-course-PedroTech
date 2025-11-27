export default async function Users () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const post = await res.json()
    console.log(post)
    return (
        <div>
            <h1>ini page user, berikut data yang gw fetch ya</h1>
            <ul>
                {post.map((user :{id: number; name: string;}) => (
                    <li key = {user.id}>
                        <h3> {user.name} </h3>
                    </li>
                ))}
                
            </ul>

        </div>
    )
}
