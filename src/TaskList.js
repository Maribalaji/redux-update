import React from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import MyVerticallyCenteredModal from "./UpdateTask";

import { useSelector,useDispatch } from 'react-redux';
import { removeTaskFromList, setselectedTask } from "./TaskSlice";

const TaskList=()=>{

    const {tasksList}=useSelector((state)=>state.tasks)
    const  dispatch=useDispatch()
    const updateTask=(task)=>{
        console.log('update');
        setModalShow(true)
        dispatch(setselectedTask(task))
        

    }
    const deleteTask=(task)=>{
        console.log('deleteTask');
        dispatch(removeTaskFromList(task))

    }
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Task Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          tasksList && tasksList.map((task,index)=>{
            return(
              <tr key={task.id}>
                <td>{index+1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                <Button variant="info" className="mx-3" 
                onClick={()=>updateTask(task)}>
                  <i className="bi bi-pencil-square"></i>
                  </Button>
                <Button variant="danger" onClick={()=>deleteTask(task)}><i className="bi bi-trash3"></i></Button>
                </td>
              </tr>

            )

          })
          
        }
        
       
      </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}
export default TaskList