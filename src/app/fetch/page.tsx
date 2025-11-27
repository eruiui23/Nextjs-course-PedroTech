import Button from "./button"

export default async function Fetch() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const post = await res.json()
    console.log(post)

    return (
        <div>
            <h1>ini page fetch</h1>
            <Button></Button>
            
        </div>
        
    )
}