import React from 'react'

export const ButtonBar = () => (
  <div style={{ top: 'calc(100% - 4rem)' }} className="absolute w-full h-16 flex justify-between bg-teal-400 text-teal-100 px-6">
    <button className="font-bold uppercase" type="button">Pécédent</button>
    <button className="font-bold uppercase" type="button">Suivant</button>
  </div>
)
