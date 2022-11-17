import './page.css';
import { useState } from 'react';
import Pages1 from './pages1/pages1.js';
import Pages5 from './pages5/pages5.js';
import Pages5a from './pages5/page5a.js';
import Pages6 from './pages6/pages6';
import Pages7 from './pages7/pages7';
import Pages9 from './pages9/pages9';

function Page() {
<<<<<<< HEAD
    const [clicktrue, setClicktrue] = useState(true);
    const [page, setPage] = useState('page1');
=======
    const ArrLesson = ['Bài 1', 'Bài 2', 'Bài 3', 'Bàì 4', 'Bài 5', 'Bài 6', 'Bài 7', 'Bài 8'];
    const [page, setPage] = useState(ArrLesson[0]);
    const [ison, setIson] = useState(true);
    const ListItem = (name) => {
        return (
            <li className='Page__menu-item-list' onClick={() => setPage({name})}>{name}</li>
        );
    }

    console.log(page.name);
>>>>>>> 2a08c18b8184f868a95c1862881275060c54da38
    return (
        
        <div className='Page'>
            <div className='Page__menu'>
                <h4 className='Page__menu-h4'>Danh mục</h4>
                <li className='Page__menu-list'>
<<<<<<< HEAD
                    <h4 className='Page__menu-h4' onClick={() => setClicktrue(!clicktrue)}>Lesson2</h4>
                    { clicktrue ||
                    <ul className='Page__menu-item'>
                        <li className='Page__menu-item-list' onClick={() => setPage('page1')}>
                            Bài 1
                        </li>
                        <li className='Page__menu-item-list'>
                            Bài 2
                        </li>
                        <li className='Page__menu-item-list'>
                            Bài 3
                        </li>
                        <li className='Page__menu-item-list'>
                            Bài 4
                        </li>
                        <li className='Page__menu-item-list' onClick={() => setPage('page5')}>
                            Bài 5
                        </li>
                        <li className='Page__menu-item-list' onClick={() => setPage('page6')}>
                            Bài 6
                        </li>
                        <li className='Page__menu-item-list' onClick={() => setPage('page7')}>
                            Bài 7
                        </li>
                        <li className='Page__menu-item-list'>
                            Bài 8
                        </li>
                        <li className='Page__menu-item-list' onClick={() => setPage('page9')}>
                            Bài 9
                        </li>
                    </ul>
                    }
                </li>
            </div>
            <div className='Page__list'>
                {page === 'page1' && <Pages1 />}
                {page === 'page1' && 
                    <>
                    <Pages5 />
                    <Pages5a />
                    </>
                }
                {page === 'page6' && <Pages6 />}
                {page === 'page7' && <Pages7 />}
                {page === 'page9' && <Pages9 />}
=======
                    <h4 className='Page__menu-h4' onClick={() => setIson(!ison)}>Phần React</h4>
                    { ison && <ul className='Page__menu-item'>
                        {ListItem(ArrLesson[0])}
                        {/* {ListItem(ArrLesson[1])}    */}
                        {/* {ListItem(ArrLesson[2])} */}
                        {/* {ListItem(ArrLesson[3])} */}
                        {ListItem(ArrLesson[4])}
                        {ListItem(ArrLesson[5])}
                        {ListItem(ArrLesson[6])}             
                    </ul>}
                </li>
            </div>
            <div className='Page__list'>
                { page.name === ArrLesson[0] && <Pages1 /> }
                { page.name === ArrLesson[4] && 
                <>
                <Pages5 /> 
                <Pages5a /> 
                </>}
                { page.name === ArrLesson[5] && <Pages6 /> }
>>>>>>> 2a08c18b8184f868a95c1862881275060c54da38
            </div>
        </div>
    );
}

export default Page;