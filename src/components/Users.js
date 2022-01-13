import {useEffect, useState} from "react";
import User from "./User";

export default function Users() {

    let [users, setUsers] = useState([]);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(value => {
                    setUsers(value);
                })
        },[])

    return(
        <div className={'ul'}>
            <ul>
                {
                    users.map(value => <li key={value.id}><User  item={value}/> </li>)

                }
            </ul>
        </div>
    )
}