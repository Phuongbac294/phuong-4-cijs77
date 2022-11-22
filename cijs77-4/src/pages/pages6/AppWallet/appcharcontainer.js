import './appwallet.css';
import CharItem from './charitem';

export default function AppCharContainer() {
    const arrmonth = [
        {id : 1 , spend : 1200, income : 1500},
        {id : 2 , spend : 1200, income : 1500},
        {id : 3 , spend : 1000, income : 1500},
        {id : 4 , spend : 800, income : 1500},
        {id : 5 , spend : 1200, income : 1500},
        {id : 6 , spend : 900, income : 1500},
        {id : 7 , spend : 1200, income : 1500},
        {id : 8 , spend : 1200, income : 1500},
        {id : 9 , spend : 1600, income : 1500},
        {id : 10 , spend : 1200, income : 1500},
        {id : 11 , spend : 100, income : 1500},
        {id : 12 , spend : 1200, income : 1500},
    ]
    const CharMonth = (prors) => {

    }
    return (
        <div className='appcharcontainer'>
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
            <CharItem />
        </div>
    );
}