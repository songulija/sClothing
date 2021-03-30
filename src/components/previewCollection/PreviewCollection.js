import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'
import './styles.scss'

//get title and items from props, passed properties with values
function PreviewCollection({ title, items }) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>

        </div>
    )
}

export default PreviewCollection
