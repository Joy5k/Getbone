import { useEffect, useState } from "react"

const UseAdmin = (email:string) => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                })
        }
    }, [email])
    return [isAdmin]
}

export default UseAdmin;