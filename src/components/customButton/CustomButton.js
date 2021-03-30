import React from 'react'
import './styles.scss'

function CustomButton({children, ...otherProps}) {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
