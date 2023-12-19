import { createSlice } from '@reduxjs/toolkit'


const initialState={
    tasksList:[],
    selectedTask:{}
}

const tasksSlice=createSlice({
    name:"tasksSlice",
    initialState,
    reducers:{
        addTaskToList:(state,action)=>{
            const id=Math.random*100
            let task={...action.payload, id}
            state.tasksList.push(task)

        },

        removeTaskFromList:(state,action)=>{
            state.tasksList=state.tasksList.filter((task)=>task.title !== action.payload.title)


        },

        updateTaskInList:(state,action)=>{
                state.tasksList=state.tasksList.map((task)=>
                    task.title === action.payload.title? action.payload:task
                )

        },
        setselectedTask:(state,action)=>{
            state.selectedTask=action.payload

        },
    }
})


export const { addTaskToList,removeTaskFromList,updateTaskInList,setselectedTask }=tasksSlice.actions

export default tasksSlice.reducer;