import React from 'react'

type SliderProps = {
  img: string,
}

export const Slider = ({ img }: SliderProps) => {
  //TODO réfléchir à une logique de slider -- prendre une lib open source ?
  return (
    <img className="absolute -left-2" src={img} alt="x" />
  )
}
