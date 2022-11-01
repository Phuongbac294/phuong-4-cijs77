import '../../pages/pages5/pages5.css';

export default function Lamp({color, isOn}) {
    return (
        <div className='lamp__list'>
            <div className={`lamp__item lamp-${color} ${isOn && "on"}`}></div>
        </div>
    );
};