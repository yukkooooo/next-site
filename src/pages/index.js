import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'SWR'

import Header from './components/header'
import Content from './components/content'

import Styles from '../styles/index.module.css'


const fetcher = url => fetch(url).then(res => res.json())

export default function Home() {
  let title = "ヘッダーです"
  const { data, error } = useSWR('/api/message', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Content>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      <p>{data.message}</p>

      <p className={Styles.mytitle}>wawawawaaa</p>
      <div>
        <Link href="/about">About</Link>


      </div>

      <style jsx>{`
        h1 {
          color:white;
          
        }
      
      `}</style>


    </Content>
  )
}