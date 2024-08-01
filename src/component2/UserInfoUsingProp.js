import { useState } from "react"
import { UserProfile } from "./userprofile"

export function UserInfoUsingProp() {
    const [Userinfo,setUserInfo] =useState([
        {
            id:1,
            firstname: "Yahsjeet",
            lastname: "Rawale",
            age: 24,
            gender: "male",
            isadmin: true
        },
        {
            id:2,
            firstname: "Pranay",
            lastname: "Solao",
            age: 40,
            gender: "male",
            isadmin: true
        },
        {
            id:3,
            firstname: "Vinay",
            lastname: "Lende",
            age: 27,
            gender: "male",
            isadmin: false
        },
        {
            id:4,
            firstname: "Ashray",
            lastname: "Lengure",
            age: 25,
            gender: "male",
            isadmin: true
        },
    ])

    function OnDelete(id){
        alert("Are you want to be delete")
        const filteruser=Userinfo.filter(user=>user.id !=id)
        // Userinfo.splice(id,5)
        setUserInfo([...filteruser])
    }
    return (
        <div className="container-fluid">
          {
            Userinfo.map(val2=>{
                return <div>
                    <UserProfile onDelete={()=>{
                        OnDelete(val2.id)
                       }
                } firstname={val2.firstname} lastname={val2.lastname} age={val2.age}  isadmin={val2.isadmin} gender={val2.gender}
                   
                    />

                </div>
            })
          }
        </div>
    )

}