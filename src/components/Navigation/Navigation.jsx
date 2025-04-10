import React from 'react'
import { Link } from 'react-router-dom'
import s from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={s.wrapper}>
    <Link className={s.link} to="/qr-code/generate">Генерирровать QR код</Link>
    <Link className={s.link} to="/qr-code/scan">Сканировать QR код</Link>
    <Link className={s.link} to="/qr-code/generateHistory">История генерирования</Link>
    <Link className={s.link} to="/qr-code/scanHistory">История скинирования</Link>
    </nav>
  )
}
