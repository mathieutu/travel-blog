import React from 'react'

import { Slider } from '../Slider'
import { Title } from '../Title'
import { ArticleTitle } from '../ArticleTitle'
import { ArticleText } from '../ArticleText'
import { ButtonBar } from '../ButtonBar'

type InformationsProps = {
  data: Record<string, any>,
}

export const Informations = ({ data }: InformationsProps) => {

  return (
    <div className="left-2/3 fixed w-2/6 bg-white h-full top-0 z-20">
      <div>
        <Title title={`Étape ${data.step}`} />
        {data.pictures !== null && data.pictures.map((res) => (
          <Slider img={res.file.url} />
        ))}
      </div>
      <div>
        <ArticleTitle text={data.title} />
        {data.text.text && (
          <ArticleText text={data.text.text} />
        )}
      </div>
      <ButtonBar step={Number(data)} />
    </div>
  )
}

// réfl"chir à la mise en place du slider pour bien mettre les images
