import React from 'react'

import { Slider } from '../Slider'
import { Title } from '../Title'
import { ArticleTitle } from '../ArticleTitle'
import { ArticleText } from '../ArticleText'
import { ButtonBar } from '../ButtonBar'

type InformationsProps = {
  hidden: boolean,
}

export const Informations = ({ hidden }: InformationsProps) => {

  return (
    <div className={`${hidden ? 'left-2/3' : 'left-1/1'} fixed w-2/6 bg-white h-full top-0 z-20`}>
      <div>
        <Title title="Etape 2" />
        <Slider img="https://images.lanouvellerepublique.fr/image/upload/t_1020w/f_auto/5b95be27be7744fb5c8b467b.jpg" />
      </div>
      <div>
        <ArticleTitle text="Mon avis sur Paris ?" />
        <ArticleText text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam eveniet dolores rem perspiciatis, magnam molestias a aliquam labore cupiditate, nam praesentium sequi obcaecati! Labore amet consequuntur architecto iusto eius accusamus natus veritatis!" />
      </div>
      <ButtonBar />
    </div>
  )
}