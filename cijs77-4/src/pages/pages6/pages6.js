import './pages6.css';
import AppHeader from './AppWallet/appheader.js'
import AppCharContainer from './AppWallet/appcharcontainer';
import AppFilter from './AppWallet/appfilter';
import AppExpense from './AppWallet/appexpens';


export default function Pages6() {
    return (
        <div className='pages6'>
            <h3>APP quản lý chi tiêu</h3>
            <div className='appWallet'>
                <AppHeader />                
                <div className='appWallet__container'>
                    <AppFilter />
                    <AppCharContainer />
                    <AppExpense />
                </div>
            </div>
            {/* <div style="width: 800px;"><canvas id="acquisitions"></canvas></div> */}
        </div>
    );
    
}