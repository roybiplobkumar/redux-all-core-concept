import {configureStore} from '@reduxjs/toolkit'
import couterReduser from '../redux/features/counter/counterSlice'

const store=configureStore({
  reducer:{couterReduser}
})
export default store;