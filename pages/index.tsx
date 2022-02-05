import Head from 'next/head'
import { SyntheticEvent, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const Login = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
      const { data } = await axios.post(
        `https://whatsappchat-server.herokuapp.com/api/user/login`,
        {
          email,
          password,
        },
        config
      )
      console.log(data)
    } catch (error) {
      alert(error.response.data.message)
    }
    setemail('')
    setpassword('')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input
        className="bg-red-50"
        value={email}
        onChange={(e) => {
          setemail(e.target.value)
        }}
      />
      <input
        className="bg-red-400"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value)
        }}
      />
      <button onClick={Login}>login</button>
    </div>
  )
}
