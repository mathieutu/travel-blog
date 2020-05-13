import React from 'react'

type TitleProps = {
  title: string,
}

export const Title = ({ title }: TitleProps) => (
  <h2 className="bg-teal-400 text-2xl text-teal-100 font-extrabold uppercase text-white px-8 py-4">{title}</h2>
)
