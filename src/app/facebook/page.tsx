'use client'
import { useRouter } from "next/navigation"
import { Button } from 'react-bootstrap';


const Facebook = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            Hello from FB
            <div>
                <Button variant="primary">Next app with KsM</Button>
                <button onClick={() => handleBtn()}> Back</button>
            </div>
        </div>

    )
}
export default Facebook