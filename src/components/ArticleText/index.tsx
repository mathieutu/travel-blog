import React from 'react'

type ArticleTextProps = {
  text: string,
}

export const ArticleText = ({ text }: ArticleTextProps) => (
  <p className="py-1 font-light px-8 text-black text-sm">{text}</p>
)
