import React from 'react'
import styles from './Gift.module.css'
import userImg from '../../../../../assets/img/gifts/square.jpeg'
import giftIcon from '../../../../../assets/img/gifts/gift.svg'

function Gift() {
  return (
    <div className={styles.gift}>
        <div className={styles['user-photo']}>
            <img src={userImg} alt="" />
        </div>
        <span>Олег</span>:
        <img className={styles['gift-icon']} src={giftIcon} alt="" />
    </div>
  )
}

export default Gift