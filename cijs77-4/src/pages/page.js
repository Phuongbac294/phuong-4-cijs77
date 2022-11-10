import './page.css';
import { useState } from 'react';
import Pages1 from './pages1/pages1.js';
import Pages5 from './pages5/pages5.js';
import Pages5a from './pages5/page5a.js';
import Pages6 from './pages6/pages6';

function Page() {
    const ArrLesson = ['Bài 1', 'Bài 2', 'Bài 3', 'Bàì 4', 'Bài 5', 'Bài 6', 'Bài 7', 'Bài 8'];
    const [page, setPage] = useState(ArrLesson[0]);
    const [ison, setIson] = useState(true);
    const ListItem = (name) => {
        return (
            <li className='Page__menu-item-list' onClick={() => setPage({name})}>{name}</li>
        );
    }

    console.log(page.name);
    return (
        
        <div className='Page'>
            <div className='Page__menu'>
                <h4 className='Page__menu-h4'>Danh mục</h4>
                <li className='Page__menu-list'>
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
            </div>
        </div>
    );
}

export default Page;