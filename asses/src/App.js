import 'bootstrap/dist/css/bootstrap.min.css'
import {useState,useEffect} from 'react'


function App(){

  const[productlist,setProductlist]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(json=>setProductlist(json))
  });
}
return(
  <>
      <div className='container'>
           <div className='table table-bordered '>
              
              {
                  tablelist.map((value,index)=>(

                      <table className=''>
                          <tbody>
                              <thead>
                                  <tr>
                                  
                                  <th>Product Image</th>
                                  <th>Product name</th> 
                                  <th>Product description</th>
                                  <th>Product rating</th>
                                  <th>Product category</th>
                                  <th>Product count</th>
                                  </tr>
                                  
                                  <tr>
                                      <td><img className="image" height={100} src={value.image} alt="sample"/></td>
                                      <td>{value.title}</td>
                                      <td>{value.description}</td>
                                      <td>{value.price}</td>
                                      <td>{value.category}</td>
                                      <td>{value.rating.count}</td>
                                  </tr>
                                  
                              </thead>
                          </tbody>
                      </table>
                      
                  ))
              }
          </div>
  </div>    




  </>
);
