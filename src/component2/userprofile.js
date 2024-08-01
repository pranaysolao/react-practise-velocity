import { useState } from "react"

export function UserProfile() {
    const user = {
        firstname: "Pranay",
        lastname: "Solao",
        age: 24,
        gender: "male"
    }

    const [isloading, setIsloading] = useState([user])
    return (
        <div className="container-fluid">
            {
                isloading.map(val => {
                    return<div>
                        <p>firstname: {val.firstname}</p>
                        <p> lastname: {val.lastname}</p>
                        <p>age: {val.age}</p>
                        <p>gender: {val.gender}</p>
                    </div>
                })
            }
        </div>
    )
}