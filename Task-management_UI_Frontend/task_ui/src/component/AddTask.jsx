import React, { useState } from "react";
import taskservice from "../service/taskservice";


const AddTask = () => {

    const[task,setTask]=useState({
        title:"",
        description:"",
        completed:"",
    
    });
    const [msg, setMsg] = useState("");
   const handleChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, [e.target.name]: value });
    
  };

  const TaskRegsiter = (e) => {
    e.preventDefault();
    console.log(task);

    taskservice
    .saveTask(task)
    .then((res) => {
      console.log("Task Added Sucessfully");
      setMsg("Task Added Sucessfully");
        setTask({
          title: "",
          description: "",
          completed: "",
          
        });
        
      })
    
    .catch((error) => {
      console.log(error);
    });
  
    
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Task</div>
              
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              <div className="card-body">
                <form onSubmit={(e) => TaskRegsiter(e)}>
                  <div className="mb-3">
                    <label>Enter title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={task.title}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={task.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter completed</label>
                    <input
                      type="text"
                      name="completed"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={task.completed}
                    />
                  </div>

                  
                    
                  
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;