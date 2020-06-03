import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class listComponent extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      listEmployee:[]
    }
  }

  componentDidMount(){

    axios.get("http://192.168.1.101:4000/employee/list")
    .then(res => {
      const data = res.data.data;
      this.setState({ listEmployee:data });
    })
    .catch(error => {
      alert(error)
    });

  }


  render()
  {
    return (
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Role</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }
  loadFillData(){

    return this.state.listEmployee.map((data, index)=>{
      return(
        <tr key={index}>
          <th>{data.id}</th>
          <td>{data.role.role}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
            <button class="btn btn-outline-info mr-1"> Edit </button>
            <button class="btn btn-outline-danger "> Delete </button>
          </td>
        </tr>
      )
    });
  }
}


export default listComponent;