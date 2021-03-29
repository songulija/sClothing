import React from 'react'
import {withRouter} from 'react-router-dom';//powering up our component to have acces to those things related to router
import './styles.scss'
//destructure title from props
const MenuItem = ({ title, imageUrl, size, match, history }) => (//match.url(where we are.)
    <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${title.toLowerCase()}`)}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);//it will return super powered component with access to to those location,match and history
