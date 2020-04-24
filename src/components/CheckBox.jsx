import React from 'react'

function CheckBox(props) {
    // console.log(props, 'checkbox')
    return (
        <>
            <input type="checkbox" value={props.ifsc} id={props.ifsc} checked={props.isChecked} onChange={props.handleCheckBox} />
        </>
    )
}

export default CheckBox
