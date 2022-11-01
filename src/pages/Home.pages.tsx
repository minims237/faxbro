import React from "react"
import DepartmentItem from "../components/DepartmentItem.components"
import { departments } from "../const/department"
import './styles/home.styles.css'

const Home=()=>{
    return(
        <div className="hcontainer">
            {departments.map((d:any)=>(
                  <DepartmentItem icon={d.icon} name={d.name}/>
            ))}
          
        </div>
    )
}

export default Home