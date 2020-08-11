import React from 'react';
import person from '../person';
import './list.scss';

const List = () => <ul>
    {
        person.education.map(
            item => 
                <li key={item} className='edu'>
                    <p className='year'>{item.year}</p>
                    <div className='desc'>
                        <p className='title'>{item.line1}</p>
                        <p>{item.line2}</p>
                    </div>
                </li>
        )
    }
</ul>;
    

export default List;

