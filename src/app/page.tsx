"use client"
import Link from "next/link"
import x from './styles/app.module.css'
import y from './styles/ksm.module.css'



const Home = () => {
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li className={y["red"]}>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li style={{ margin: "20px 0px" }}>
          <Link href="/tiktok" >Tiktok</Link>
        </li>
      </ul>

    </div >
  )
}
export default Home