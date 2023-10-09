
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import taskservice from "../service/taskservice";


 const Home = () => {
    const [taskList, setTaskList] = useState([]);
    const [msg, setMsg] = useState("");
    useEffect(() => {
        init();
  }, []);

        const init = () => {
        taskservice
        .getAllTask()
        .then((res) => {
            setTaskList(res.data);
        })
        .catch((error) => {
            console.log(error);
          });
        };
    
        const deleteTask = (id) => {
            taskservice
              .deleteTask(id)
              .then((res) => {
                setMsg("Delete Sucessfully");
                init();
              })
              .catch((error) => {
                console.log(error);
              });
          };





  return (
    <>
    <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
            <div className="card-header fs-3 text-center">
                All Task List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>



            <div className="card-body">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl No</th>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">completed</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {taskList.map((p, num) => (
    <tr>
    <td>{num + 1}</td>
    <td>{p.title}</td>
    <td>{p.description}</td>
    <td>{p.completed}</td>

    <td> 
    <Link to= {'editProduct/'+p.id} className="btn btn-sm btn-primary">Edit</Link>
  <button onClick={()=>deleteTask(p.id)} className="btn btn-sm btn-danger ms-1" >Delete</button>
  </td>
    
    </tr>
  ))}
  </tbody>
  
  
</table>
            </div>
            </div>
        </div>
    </div>
     </div>
    </>
  )
}
export default Home