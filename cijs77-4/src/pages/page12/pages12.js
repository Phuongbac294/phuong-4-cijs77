import './pages12.css'
// import Provider from './store/Provider';
import { StoreProvider} from './store'
import Pages12_1 from './pages12_1';

function Pages12() {
    return (
        <StoreProvider>
            <div>
                <h1> Global State with Context + useReducer</h1>
                <Pages12_1/>
            </div>
        </StoreProvider>
    )
}

export default Pages12;