import { v4 as uuidv4 } from 'uuid'; // uuidv4();
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
    return (
        <div className='rounded-[35px] w-[1292px] mt-[64px] mb-[41px] mx-[74px] border flex'>
            <div>
                <SideBar />
            </div>
            <div className="flex flex-col">
                <Header />
                <Main />
            </div>   
        </div>
    );
}

export default App;
