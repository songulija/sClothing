import React, { useState } from 'react'
import SHOP_DATA from '../../data/shopData.js'
import PreviewCollection from '../../components/previewCollection/PreviewCollection.js'

function ShopPage() {
    //useState initial state(collections of clothes), and function to update initial state, 
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className='shop-page'>
            {collections.map((collection) => (
                <PreviewCollection key={collection.id} title={collection.title} items={collection.items} />
            ))}
        </div>
    )
}

export default ShopPage
