import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getList, postTask, editTask, removeTask } from "../../reducers/List";



const List = () => {

 const dispatch = useDispatch();
 const [task , setTask] = useState("")


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


  return (
    <>
      <div>
        {!state.token ? (
          <h2>
            {" "}
            You Must <Link to="/">LogIn </Link> or{" "}
            <Link to="/signup"> Sign Up </Link> To Show Your List{" "}
          </h2>
        ) : (
          <div className="wrapper">
            <input
              type="text"
              placeholder="Task ... "
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={()=> addTask()}>Add</button>
             
             {state.list.length ?(
               

             ) }
        )}
        </div>
      </div>
    </>
  );
  
};

export default List;
