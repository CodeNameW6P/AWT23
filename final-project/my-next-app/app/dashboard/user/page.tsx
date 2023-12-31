async function getData() {
    // const res = await fetch('https://dummyjson.com/products/')
    const res = await fetch('http://localhost:4000/user')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return await res.json()
}

export default async function User() {
    const data = await getData()

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )

    // return (
    //     <div>
    //         {
    //             data && Array.isArray(data) && data.map((data: any) => (
    //                 <div key={data.id}>
    //                     ID: {data.id}
    //                     <br />
    //                     Username: {data.username}
    //                     <br />
    //                     Email: {data.email}
    //                 </div>
    //             ))
    //         }
    //     </div>
    // )
}