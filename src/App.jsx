import React, { useEffect, useState } from 'react'

const App = () => {
 const [record, setRecord] = useState([]);
 const [modelData , setModelData] = useState({
  id:'',
  name:'',
  email:'',
  website:''
 })
 const [modelOpen ,setModelOpen]= useState(false)
 const GetData =()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response=>response.json())
    .then(res =>setRecord(res));
 };
 useEffect(() => {
  GetData();
 },[]);
 const ShowDetails=(id)=>{
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(response=>response.json()
  .then(res=>setModelData(res)),
   setModelOpen(true)
)}
  return (
    <>
      <div className='flex justify-center' >
        <table>
          <thead className='bg-black'>
            <tr>
            <th className="border-x-[1px] border-[#fff] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">No</th>
                <th className="border-x-[1px] border-[#fff] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                <th className="border-x-[1px] border-[#fff] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Username</th>
                <th className="border-x-[1px] border-[#fff] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Website</th>
                <th className="border-x-[1px] border-[#fff] px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Show Details</th>

            </tr>
          </thead>
          <tbody>
           {record.map((user,index)=>(
             <tr key={user.id} className=' border-y-[1px] border-[#000]'>
             <td >{user.id}</td>
             <td >{user.name}</td>
             <td >{user.username}</td>
             <td >{user.website}</td>
             <td ><button className=' px-2 bg-blue-600 text-white rounded-md'
             onClick={()=> ShowDetails(user.id)}>Details</button></td>
           </tr>
           ))}
          </tbody>
        </table>
      </div>
      {/* model data */}
    {modelOpen &&(
        <div className= '  absolute top-[40%] bg-[#b98b36f1] flex items-center  justify-center rounded-xl w-[50vw] translate-x-[50%] '>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            
              <tr  >
                <td className='mr-2'>{modelData.id}</td>
                <td className='mr-2'>{modelData.name}</td>
                <td className='mr-2'>{modelData.email}</td>
                <td className='mr-2'>{modelData.website}</td>
                <button className='bg-red-700 text-white px-1 rounded-lg flex items-center justify-center' onClick={ ()=> setModelOpen(false)} > close</button>
              </tr>
         
          </tbody>
        </table>
      </div>
    )}
    </>
  )
}

export default App