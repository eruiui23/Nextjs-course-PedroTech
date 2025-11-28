export async function makePost(name : string){
    const res = await fetch(`${process.env.MY_URL}/api/hello`, {
        method : "POST",
        headers : {
            "Content-Type": "application/json",

        },
        body : JSON.stringify({ name: name})
    })

    const data = await res.json()
    return { data }

}

export default async function friends() {
    const { data } = await makePost("mo")
    return (
        <div>
            <h1>ini page friends { data.message} </h1>
            
        </div>
    )
}