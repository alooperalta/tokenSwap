import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../assets/css/globals.module.css'

const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen text-white select-none flex flex-col justify-between',
}

export default function Home() {
  return (
    <div className={`${style.wrapper} ${styles.background}`}>
      <Header></Header>
      <Main></Main>
      <h2>Transaction History</h2> 
    </div>
  )
}
