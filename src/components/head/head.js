import React from 'react';
import person from '../person';
import List from '../list/list';
import './head.scss';

 const Head = () => {
    return (
        <div className='main'> 
            <div className='head'>
                <img src={require('../../assets/avatar.jpg')} style={{width:'150px', height: '150px'}}/>
                <h1>HELLO,</h1>
                <h2>MY NAME IS {person.name} {person.age}YO AND THIS IS MY RESUME/CV</h2>
            </div>
            <hr/>
            <div className='content'>
                <h3>ABOUT ME</h3>
                <p>{person.desc}</p>
                <h3>EDUCATION</h3>
                <List />
            </div>
    </div>
    )


}

export default Head;