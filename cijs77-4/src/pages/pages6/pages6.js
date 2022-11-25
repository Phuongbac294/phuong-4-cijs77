import './pages6.css';
import AppHeader from './AppWallet/appheader.js'
import AppCharContainer from './AppWallet/appcharcontainer';
import AppFilter from './AppWallet/appfilter';
import AppExpense from './AppWallet/appexpens';
import { useState} from 'react';


export default function Pages6() {
    const [expenses, setExpenses] = useState([
                        {finance: 'mua xe', amount: 2000, date: [2022, 9, 26]},
                        {finance: 'mua bàn', amount: 500, date: [2022, 10, 26]},
                        {finance: 'mua điện thoại', amount: 850, date: [2020, 11, 26]},
                        {finance: 'mua tủ', amount: 1000, date: [2022, 11, 20]},
                        {finance: 'mua quạt 1', amount: 60, date: [2021, 11, 2]},
                        {finance: 'mua quạt 2', amount: 60, date: [2022, 11, 2]},
                        {finance: 'mua quạt 3', amount: 60, date: [2022, 8, 2]},
                        {finance: 'mua quạt 4', amount: 60, date: [2021, 7, 2]},
                        {finance: 'mua quạt 5', amount: 60, date: [2021, 12, 15]},
    ])
    const d = new Date().getFullYear();
    const [year, setYear] = useState(d)
    const [chart, setChart] = useState([
        {id : 'Jan' , spend : 1200, income : 1500},
        {id : 'Feb' , spend : 1200, income : 1500},
        {id : 'Mar' , spend : 1000, income : 1500},
        {id : 'Apr' , spend : 800, income : 1500},
        {id : 'May' , spend : 1200, income : 1500},
        {id : 'Jun' , spend : 900, income : 1500},
        {id : 'Jul' , spend : 1200, income : 1500},
        {id : 'Aug' , spend : 1200, income : 1500},
        {id : 'Sep' , spend : 1600, income : 1500},
        {id : 'Oct' , spend : 1200, income : 1500},
        {id : 'Nov' , spend : 100, income : 1500},
        {id : 'Dec' , spend : 1200, income : 1500},
    ])
    const HanldeCchart =(e) => {
        setYear(e.target.value)
        // setChart()
    }
    console.log(year);
    return (
        <div className='pages6'>
            <h3>APP quản lý chi tiêu</h3>
            <div className='appWallet'>
                <AppHeader expenses={expenses} setExpenses={setExpenses}/>                
                <div className='appWallet__container'>
                    <AppFilter HanldeCchart={HanldeCchart}/>
                    <AppCharContainer chart={chart}/>
                    <AppExpense expenses={expenses}/>
                </div> 
            </div>
            {/* <div style="width: 800px;"><canvas id="acquisitions"></canvas></div> */}
        </div>
    );
    
}