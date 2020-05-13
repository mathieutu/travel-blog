import React from 'react'
import { Link } from 'gatsby'

type ButtonBarProps = {
  step: number,
}

export const ButtonBar = ({ step }: ButtonBarProps) => {

  return (
    <div style={{ top: 'calc(100% - 4rem)' }} className="absolute w-full h-16 flex justify-between bg-teal-400 text-teal-100 px-6">
      <Link to={step - 1} className="font-bold uppercase center my-auto" type="Link">Pécédent</Link>
      <Link to={step + 1} className="font-bold uppercase center my-auto" type="Link">Suivant</Link>
    </div>
  )
}
