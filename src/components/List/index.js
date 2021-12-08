import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getList, postTask, editTask, removeTask } from "../../reducers/List";



const List = () => {

 const dispatch = useDispatch();
 const [task , setTask] = useState("")
//  const [editor , setEditor] = useState(false);



 const state = useSelector((state) => {
return {
  token: state.Login.token,
  list: state.List.list
};
 });

 useEffect(()=>{
   getTheList(state.token);
 }, []);

 const getTheList = async (token)=>{
   try{
     const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/todos`, {
       headers: {
         Authorization: `Bearer ${token}`
       },
     });
     dispatch(getList(res.data));

   }catch(error){
     console.log(error);
   }
 };

const addTask = async ()=>{
  try {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/task`,{
      task
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(postTask(res.data))
  }catch(error){
    console.log(error);
  }
}

const edit = async(id)=> {
try{
  const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/edit/${id}`,{
    task 
  },{
    headers: {
        Authorization: `Bearer ${token}`
      });
       dispatch(editTask(res.data))
}catch(error){
    console.log(error);
  }
}


const remove = async(id)=> {
  try{
    const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/todo/${id}`,{
      headers:{
         Authorization: `Bearer ${token}`
      }
    });
    dispatch(removeTask(res.data));
  }catch(error){
    console.log(error);
  }
}






  return (
    <>
      <div>
        {!state.token ? (
          
              
          <div>
          <h2>
            {" "}
            You Must <Link to="/">LogIn </Link> or{" "}
            <Link to="/signup"> Sign Up </Link> To Show Your List{" "}
          </h2>
           </div>
        ) :(
          <div>
            <input
            type="text"
            placeholder=" Task...."
            onChange={(e)=> setTask(e.target.value)}
            />
            <button onClick={()=> addTask()}> Add</button>

          </div>
          {state.list.length ? (
            <ul>
            {state.list.map((task)=>(
              <div className="item" key={task._id}>
            <li> {task.task}</li>
        
            <button onClick={()=> edit(task._id)}>Edit</button>
            <button onClick={()=> remove(task._id)}>Remove</button>
            </div>
            ))}
            
            </ul>
          ): (
            <h2> You Don't Have Any Tasks Yet !</h2>
          )}
        )
        </div>
    
    </>
  );
  
};

export default List;
