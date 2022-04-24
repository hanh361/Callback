import React,{ useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
const ListPage = () => {
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
         callApi();
    },[])

    const callApi = async () => {
        const result = await axios.get("https://624061412aeb48a9af735b00.mockapi.io/api/v1/users");
          setLoading(false);
          setData(result.data);
        };
        
        const deleteItem = (key) => {
        const newData = data.slice(0, key).concat(data.slice(key + 1, data.length));
          setData(newData);
        };
        
        const renderItem = () => {
          return data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>
                  <img src={value.avatar} width="50" />
                </td>
                <td>{value.time}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          });
        };

    return (
        <div className="wrapper">
           {loading ?(
               <h1>Loading...</h1>
           ):(
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table> 
           )}
        </div>
    );
};

export default ListPage;