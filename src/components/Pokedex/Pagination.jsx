import React from 'react'
import './Pagination.css'
import { useState } from 'react'

const Pagination = ({ page, setPage, maximo }) => {

    const [input, setInput] = useState(1)

    const nextPage = () => {
        if (page + 1 <= maximo) {
            setPage(page + 1)
        } else {
            setPage(1)
        }
    }
    const previusPage = () => {
        if (page - 1 >= 1) {
            setPage(page - 1)
        } else {
            setPage(maximo)
        }
    }

    const onChange = e => {

        if (inputValue >= 1 && inputValue <= maximo && !isNaN(inputValue)) {

            setInput(e.target.value)
        }
    }

    return (
        <div className='pagination'>
            <button  className='btn-left' onClick={previusPage}>Prev</button>
            <input onChange={e => onChange(e)}
                name="page"
                autoComplete='off'
                value={page}
                type="text" />
            <button className='btn-rigth'onClick={nextPage}>Next</button>
        </div>
    )
}

export default Pagination