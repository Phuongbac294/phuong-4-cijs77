import './page.css';
import Pages1 from './pages1/pages1.js';
import Pages5 from './pages5/pages5.js';
import Pages5a from './pages5/page5a.js';
import Pages6 from './pages6/pages6';

function Page() {
    return (
        
        <div className='Page'>
            <div className='Page__menu'>
                {/* <h4 className='Page__menu-h4'>Danh mục</h4>
                <li className='Page__menu-list'>
                    <h4 className='Page__menu-h4'>Lesson2</h4>
                    <ul className='Page__menu-item'>
                        <li className='Page__menu-item-list'>
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
                        <li className='Page__menu-item-list'>
                            Bài 5
                        </li>
                        <li className='Page__menu-item-list'>
                            Bài 6
                        </li>
                        <li className='Page__menu-item-list'>
                            Bài 7
                        </li>
                        <li className='Page__menu-item-list'>
                            Bài 8
                        </li>

                    </ul>
                </li> */}
            </div>
            <div className='Page__list'>
                <Pages1 />
                <Pages5 />
                <Pages5a />
                <Pages6 />
            </div>
        </div>
    );
}

export default Page;