'use client'
import { useRouter } from "next/navigation"
const Facebook = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            Hello from FB
            <div>
                <button onClick={() => handleBtn()}> Back</button>
            </div>
        </div>

    )
}
export default Facebook