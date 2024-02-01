import React from 'react'
import style from './headerSection.module.css';
import { cinzelFontClass } from '@/app/util/fonts';

type Props = {}

const HeaderSection = (props: Props) => {
  return (
    <div className={`${style.sectionWrapper} ${cinzelFontClass}`}>
      <h1>Hi My Name is <br /> Stanley</h1>
    </div>
  )
}

export default HeaderSection