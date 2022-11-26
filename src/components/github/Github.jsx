import React, { useState } from 'react'
import "./github.css"
import Result from './Result'
import Search from './Search'

export default function Github() {
  const [search,setSearch] = useState('')
  const [data,setData] = useState('')
  const [repos,setRepos] = useState('')

  const getData = () => {
    fetch(`https://api.github.com/users/${search}`)
    .then(res => res.json())
    .then(data => setData(data))
    .then(
      fetch(`https://api.github.com/users/${search}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data))
    )
  }

  return (
    <div className='github'>
      <Search setSearch={setSearch} getData={getData}/>
      {data && repos && <Result data={data} repos={repos}/>}
    </div>
  )
}
