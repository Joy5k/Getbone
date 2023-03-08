import { useEffect, useState } from "react"

const UseSeller = (email:string) => {
    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://getbone-server-joy5k.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                })
        }
    }, [email])
    return [isSeller]
}

export default UseSeller;