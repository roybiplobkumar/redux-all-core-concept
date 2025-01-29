
import { Provider } from "react-redux"
import Home from "../src/pages/Home"
import store from "./redux/store";


const App = () => {
 return (
 <Provider store={store}>
   <Home></Home>
 </Provider>


 );
};

export default App;