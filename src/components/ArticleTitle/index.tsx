import React from 'react'

type ArticleTitleProps = {
  text: string,
}

export const ArticleTitle = ({ text }: ArticleTitleProps) => (
  <h3 className="py-5 font-medium px-8 text-black text-xl">{text}</h3>
)
