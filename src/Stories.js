import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { loading, hits, handleRemove } = useGlobalContext();

  if(loading) {
    return (
      <div className="loading"></div>
    )
  }

  return (
    <section className="stories">
      {hits.map(news => {
        const {objectID: id, title, url, points, author, num_comments} = news;
        return (
          <article key={id} className="story">
            <h4 className="title">{title}</h4>

            <p className="info">
              {points} points by <span> {author} | </span>
              {num_comments}{' '} comments
            </p>

            <div>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="read-link"
                >
                  Read More
                </a>
              <button className="remove-btn" onClick={() => handleRemove(id)}>Remove</button>
            </div>

          </article>
        )
      })}
    </section>
  )
}

export default Stories
