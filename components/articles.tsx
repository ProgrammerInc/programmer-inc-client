import React from 'react'
import Card from './card'

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map((article) => {
            return <Card article={article} key={`article__${article.id}`} />
          })}
        </div>
        <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
          {rightArticles.map((article) => {
            return <Card article={article} key={`article__${article.id}`} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Articles
