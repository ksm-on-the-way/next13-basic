"use client"
import Link from "next/link"
import x from './styles/app.module.css'
import y from './styles/ksm.module.css'
import { useEffect, useState } from "react"
import useSWR from "swr";
import AppTable from "@/components/app.table"

const Home = () => {
  const fetcher = (url: string) => fetch(url)
    .then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )
  if (!data) {
    return <div>Data is loading ...</div>
  }
  console.log("Check data: ", data)

  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li className={y["red"]}>
          <Link href="/youtube">Youtube</Link>
        </li>
        <li style={{margin: "20px 0px"}}>
          <Link href="/tiktok" >Tiktok</Link>
        </li>
      </ul>
      <AppTable blogs={data}></AppTable>
    </div >
  )
}
export default Home