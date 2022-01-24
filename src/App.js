import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
  
  const [state, setstate] = useState([...data]);
  const [ids, setIds] = useState();


  const handleValue = (e)=>{
    console.log(e.target.value);
    setIds(e.target.value);
  }
  const handleClick = () =>{
    if(ids>11 || !ids){
      setstate(data);
    } 
    else if(ids){
     const sliceData = data.slice(0,ids);
     setstate(sliceData);
    }
  }

  return (
    <div className="flex flex-col w-screen h-100 justify-center align-bottom">
      <div className="m-auto">
        <input onBlur={handleValue} className="m-auto border-pink-300 rounded border-2 p-1 text-sm text-pink-900 font-medium hover:border-pink-900 h-9 " />
        <button onClick={handleClick} className="m-auto ml-1 shadow-xl border-2 rounded-md px-2 py-1 hover:bg-pink-700 duration-300 hover:text-white">Search</button>
      </div>
      <div className="w-11/12 p-3 rounded-md m-auto shadow-2xl flex flex-col justify-center align-middle">
        {state.map( (value,index)=><div key={index} className='mb-4'>{value}</div>)}
      </div>
    </div>
  );
}

export default App;
