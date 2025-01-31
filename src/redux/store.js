import {configureStore} from '@reduxjs/toolkit'
import couterReduser from '../redux/features/counter/counterSlice'
import logger from 'redux-logger'

const store=configureStore({
  reducer:{couterReduser},
  middleware :(getDefaultMiddleware)=>{
   return getDefaultMiddleware().concat(logger)
  }
})
export default store;