
import React from "react";

export class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectDropdown: '',
            checkBoxList: [
                {id: 1, value: "Location", isChecked: false},
                {id: 2, value: "Business Type", isChecked: false},
                {id: 3, value: "Revenue", isChecked: false},
                {id: 4, value: "Owned By", isChecked: false},
                {id: 5, value: "Size", isChecked: false},
                {id: 6, value: "Company Age", isChecked: false}
              ]
        };
    }


    handleDropDown = (e) => {
        this.setState({ selectDropdown: e.target.value })
    }

    handleCheckBox=(event,i)=>{
        console.log('event,i----->',event,i)
        const target = event.target;
        const checked = target.checked;
        const name = target.name;
       let {checkBoxList}=this.state;
       checkBoxList[i].isChecked=checked;
        this.setState({ checkBoxList })
        
    }

    render() {
        let { selectDropdown,checkBoxList } = this.state;

        return (
            <div class="card">
                {/* <div class="card-body">
                <div className="row">
                    <div className="col-md-12 "> */}
                <div className="p-2">
                    <select className="custom-select p-2" value={selectDropdown} onChange={this.handleDropDown}>
                        <option value="Company">Company</option>
                        <option value="Country">Country</option>
                        <option value="City">City</option>
                    </select>
                </div>
                {/* </div>
                </div>
                </div> */}
                <ul class="list-group list-group list-group-flush">
                {checkBoxList.map(({value,isChecked,id},i) =>
                    <li class="list-group-item">
                        <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" onChange={(e)=>this.handleCheckBox(e,i)} checked={isChecked} id={id} />
                        <label class="custom-control-label" for={id}>{value}</label>
                    </div>
                    </li>
                   )}
              
                    {/* <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li> */}
                </ul>
            </div>
        );
    }
}


