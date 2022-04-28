import React, { useState, useEffect } from 'react'

import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [isError, setisError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [query] = useSearchParams()
  const search = query.get('search')
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // console.log(response.data)
        setUsers(response.data)
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setisError(true)
        setErrorMessage(err)
      })
  }, [])
  return (
    <>
    <h1>Halaman Home {search}</h1>
    {
        isLoading
          ? (
            <div>Loading..</div>
            )
          : isError
            ? (
            <div>{errorMessage}</div>
              )
            : (users.map((e, i) => {
                return (
                <div key={i}>
                    {e.name}
                </div>
                )
              }))
    }
    <Link to="/">Home</Link> | <Link to="/321">Detail</Link> | <Link to="/new">Insert</Link>
    </>)
}

export default Home
