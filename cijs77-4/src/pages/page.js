import './page.css';
import { useState } from 'react';
import Pages1 from './pages1/pages1.js';
import Pages2 from './pages2/pages2';
import Pages3 from './pages3/pages3';
import Pages4 from './pages4/pages4';
import Pages5 from './pages5/pages5.js';
import Pages5a from './pages5/page5a.js';
import Pages6 from './pages6/pages6';
import Pages7 from './pages7/pages7';
import Pages8 from './pages8/pages8';
import Pages9 from './pages9/pages9';

function Page() {
    const ArrLesson = ['Bài 1', 'Bài 2', 'Bài 3', 'Bàì 4', 'Bài 5', 'Bài 6', 'Bài 7', 'Bài 8', 'Bài 9'];
    const [page, setPage] = useState(ArrLesson[0]);
    const [ison, setIson] = useState(true);
    const ListItem = ArrLesson.map(item => {
        return (
            <li className='Page__menu-item-list' onClick={() => setPage({item})}>{item}</li>
        );
    });

    console.log(page.item);
    // console.log(Arrlesson);
    return (
        <div className='Page'>
            <div className='Page__menu'>
                <h4 className='Page__menu-h4' onClick={() => setIson(!ison)}>Danh mục</h4>
                {!ison && <ul className='Page__menu-list'>
                    {ListItem}
                </ul> }
            </div>

            <div className='Page__list'>
                {page.item === ArrLesson[0] && <Pages1/>}
                {page.item === ArrLesson[1] && <Pages2/>}
                {page.item === ArrLesson[2] && <Pages3/>}
                {page.item === ArrLesson[3] && <Pages4/>}
                {page.item === ArrLesson[4] && <><Pages5/> 
                                                <Pages5a/> </>}
                {page.item === ArrLesson[5] && <Pages6/>}
                {page.item === ArrLesson[6] && <Pages7/>}
                {page.item === ArrLesson[7] && <Pages8/>}
                {page.item === ArrLesson[8] && <Pages9/>}
                
            </div>
        </div>

    );
}

export default Page;