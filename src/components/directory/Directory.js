import React, { useState, useEffect } from 'react'
import './styles.scss'
import MenuItem from '../menuitem/MenuItem'
import dsections from './directoryData.js'


function Directory() {
    //useState initial value(sections), and function to update initial value
    const [sections, setSections] = useState(dsections);

    return (
        <div className='directory-menu'>
            {sections.map((section) => (
                <MenuItem ket={section.key} title={section.title}
                    imageUrl={section.imageUrl} size={section.size} />
            ))}
        </div>
    )
}

export default Directory
