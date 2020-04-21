import React from 'react'

type TitleProps = {
  title: string,
}

export const Title = ({ title }: TitleProps) => (
  <h2 className="text-2xl underline px-3 py-4">{title}</h2>
)
