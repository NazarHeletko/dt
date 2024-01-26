import React from 'react'
import styles from './FilterSection.module.css'


function FilterSection() {
  return (
    <div className={styles['filter-section']}>
        <div>
            <button>Карточки</button>
        </div>
        <div className={styles['fast-filter']}>
            <button>Усі</button>
            <button>Онлайн</button>
        </div>
        <div>
            <button>Фільтр</button>
        </div>
    </div>
  )
}

export default FilterSection