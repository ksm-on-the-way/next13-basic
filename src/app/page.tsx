
import Link from "next/link"

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li>
          <Link href="/tiktok">Tiktok</Link>
        </li>
      </ul>
    </div>
  )
}
export default Home