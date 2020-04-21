import React from 'react'

import { Slider } from '../Slider'
import { Title } from '../Title'
import { ArticleText } from '../ArticleText'

type InformationsProps = {
  hidden: boolean,
}

export const Informations = ({ hidden }: InformationsProps) => {

  return (
    <div className={`${hidden ? 'left-2/3' : 'left-1/1'} fixed w-2/6 bg-white h-full top-0`}>
      <div>
        <Title title="Etape 2" />
        <Slider img="https://images.lanouvellerepublique.fr/image/upload/t_1020w/f_auto/5b95be27be7744fb5c8b467b.jpg" />
        <ArticleText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias error debitis ab aliquam eum odio? Deleniti, ex? Accusamus ducimus distinctio quos alias maxime placeat aliquam, quod veniam sapiente, libero fugit debitis adipisci." />
      </div>
    </div>
  )
}
