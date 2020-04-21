import React from 'react'

type ArticleTextProps = {
  text: string,
}

export const ArticleText = ({ text }: ArticleTextProps) => (
  <p className="py-4 px-3 text-black">{text}</p>
)
