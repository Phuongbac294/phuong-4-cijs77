import './page.css';
import { useState } from 'react';
import Pages1 from './pages1/pages1.js';
import Pages5 from './pages5/pages5.js';
import Pages5a from './pages5/page5a.js';
import Pages6 from './pages6/pages6';
import Pages7 from './pages7/pages7';
import Pages9 from './pages9/pages9';

function Page() {
    const [clicktrue, setClicktrue] = useState(true);
    const [page, setPage] = useState('page1');
    return (
        
        <div className='Page'>
            <div className='Page__menu'>
                <h4 className='Page__menu-h4'>Danh mục</h4>
                <li className='Page__menu-list'>
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
            </div>
        </div>
    );
}

export default Page;