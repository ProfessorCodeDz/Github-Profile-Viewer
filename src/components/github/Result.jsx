import React from 'react'

export default function Result({data,repos}) {
  return (
    <div className='result'>
        <section className="card">
            <div className="image">
                <img src={data.avatar_url} alt="avatar image" />
            </div>
            <h2 className="name">{data.name}</h2>
            <p className="bio">{data.bio}</p>
            <p className="createdAt"><b>Created at :</b> {data.created_at.slice(0,data.created_at.indexOf("T"))}</p>
            <p className="updatedAt"><b>Updated at :</b> {data.updated_at.slice(0,data.updated_at.indexOf("T"))}</p>
            <p className="followers"><b>Followers:</b> {data.followers}</p>
            <p className="following"><b>Following:</b> {data.following}</p>
            <a href={data.html_url} target="_blank">Visit</a>
        </section>
        <section className="repos">
            {repos.map((repo) => (
                <div className='repo' key={repo.id}>
                    <h3>{repo.name}</h3>
                    <h4>{repo.created_at.slice(0,repo.created_at.indexOf("T"))}</h4>
                    <a href={repo.html_url} target="_blank">visit</a>
                </div>
            ))}
        </section>
    </div>
  )
}
