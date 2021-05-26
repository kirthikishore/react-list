import React from 'react'

const CheckBox = props => {
    return (
      <div>
       <input key={props.id} onClick={props} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </div>
    )
}

export default CheckBox;