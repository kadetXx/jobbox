import React, { useEffect } from 'react'

import styles from './InputSelect.module.scss'

const InputSelect = ({ options, errors, className="select", register }: any) => {
  const error = errors[register.name];

  return (
    <div className={`${styles[className]}`}>
      <select
        className={styles.input_field}
        {...register}
      >
        {options.map((option: string, index: number) => {
          <option disabled={index === 0} selected={index===0} key={index}>{option}</option>
        })}
      </select>
    </div>
  )
}

export default InputSelect
