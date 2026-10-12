import React from 'react'
import cssstyle from '../NotFound/NotFound.module.css'
import errorImage from '../../assets/404.png'

export default function NotFound() {
    return (
        <div className={cssstyle.notFound}>
            <img src={errorImage} alt="Not Found" className={cssstyle.errorImg} />
        </div>
    )
}