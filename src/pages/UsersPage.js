import {useState} from "react";

export default function UsersPage() {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }

    return (
        <ul>
            <button onClick={getUsers}>users</button>
            {users.map((user) => (
                <li key={user.id}>
                    {user.username}
                </li>
            ))}
        </ul>
    )

}
