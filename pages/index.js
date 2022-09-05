import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstView from '../components/views/1_first/FirstView'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>riskOfDev</title>
        <meta name="riskofdev" content="development team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w="100%" h="100%">
      <FirstView />
      </Box>
    </>
  )
}
