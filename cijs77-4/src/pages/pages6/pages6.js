import './pages6.css';
import AppHeader from './AppWallet/appheader.js'
import AppCharContainer from './AppWallet/appcharcontainer';
import AppExpenseItem from './AppWallet/appexpenseitem';
import AppFilter from './AppWallet/appfilter';


export default function Pages6() {
    return (
        <div className='pages6'>
            <h3>APP quản lý chi tiêu</h3>
            <div className='appWallet'>
                <div className='appWallet__header'>
                    <AppHeader />
                </div>
                <div className='appWallet__container'>
                    <AppFilter />
                    <AppCharContainer />
                    <AppExpenseItem />
                </div>
            </div>
        </div>
    );
    
}