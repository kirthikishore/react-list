import React, { Component } from 'react'
import  CheckBox  from './CheckBox';
import data from '../components/datasource.json'

class Filterlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
          filter: [
            {id: 1, value: "Location", isChecked: false},
            {id: 2, value: "Business Type", isChecked: false},
            {id: 3, value: "Revenue", isChecked: false},
            {id: 4, value: "Owned By", isChecked: false},
            {id: 5, value: "Size", isChecked: false},
            {id: 6, value: "Company Age", isChecked: false}
          ]
        }
      }

      handleAllChecked = (event) => {
        let filter = this.state.filter
        filter.forEach(filter => filter.isChecked = event.target.checked) 
        this.setState({filter: filter})
      }
    
      
      render() {
        return (
          <div>
          <h4> Filter By </h4>
                  
            {
              this.state.filter.map((filter) => {
                return (<CheckBox handleAllChecked={this.handleAllChecked}  {...filter} />)
              })
            }
          
          </div>
        );
      }
}

export default Filterlist;


