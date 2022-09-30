import {createSlice} from '@reduxjs/toolkit'

 export const userTrainerSlice =createSlice({
    name:'userTrainer',
    initialState: '',
    reducers:{
        //Funtion Setea nombre Ingresado ejecutando el action
        userTrainer : (state, action)=> action.payload
        
    }
})

export const {userTrainer} = userTrainerSlice.actions
export default userTrainerSlice.reducer
