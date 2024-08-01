import { UserProfile } from "./userprofile"

export function UserInfoUsingProp() {
    const Userinfo = [
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
    ]
    return (
        <div className="container-fluid">
          {
            Userinfo.map(val2=>{
                return <div>
                    <UserProfile firstname={val2.firstname} lastname={val2.lastname} age={val2.age}  isadmin={val2.isadmin} gender={val2.gender}/>
                </div>
            })
          }
        </div>
    )

}