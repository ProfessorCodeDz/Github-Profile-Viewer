import React from 'react'

export default function Search({setSearch,getData}) {

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleClick = () => {
    getData()
  }

  return (
    <div className='search'>
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>Search</button>
    </div>
  )
}
