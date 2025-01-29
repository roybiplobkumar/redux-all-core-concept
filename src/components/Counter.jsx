import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,incrementByValue} from "../redux/features/counter/counterSlice"

const Counter = () => {
  const {count} = useSelector((state)=> state.couterReduser);

  const dispatch=useDispatch();
 return (
 <div>
   <div onClick={()=>dispatch(increment())}>increment</div>
   <div>{count}</div>
   <div onClick={()=>dispatch(decrement())}>decrement</div>
   <div onClick={()=>dispatch(incrementByValue(2))}>Increment By value</div>
 </div>
 );
};

export default Counter;