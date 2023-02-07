import React from "react"
import './styles/departmentItem.style.css'
const DepartmentItem=(props:any)=>{
    return(
        <div className="d-flex flex-column justify-content-between align-items-center dItem py-10">
            <div>
                {props.icon}
            </div>
            <div className="dItem_txt">
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default DepartmentItem