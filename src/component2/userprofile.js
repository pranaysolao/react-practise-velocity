import { useState } from "react"

export function UserProfile(val) {
    // const users = {
    //     firstname: "Pranay",
    //     lastname: "Solao",
    //     age: 24,
    //     isadmit:true,
    //     gender: "male"

    // }

    // const [user, setUser] = useState([users])
    return (
        <div className="container-fluid">
            {
                <div>
                    <p>firstname: {val.firstname}</p>
                    <p>lastname: {val.lastname}</p>
                    <p>age: {val.age}</p>
                    <p>is admin :{val.isadmin ? "I am admin" : "I am not admit"}</p>
                   {val.isadmin && <p>gender:{val.gender}</p> }
                   <hr></hr>
                </div>}

            
        </div>
    )
}