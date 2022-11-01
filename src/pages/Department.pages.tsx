import React from "react"
import FileItem from "../components/fileItem.components"
import TopBar from "../components/TopBar.components"
import './styles/department.styles.css'
const Department = () => {
    return (
        <div className="department">
            <TopBar />
            <h1>100% Free</h1>
            <div className="d-flex flex-row justify-content-between w-100">

                <h3>Pour tous les niveaux</h3>

                <button className="btn aBtn"><span>+</span>   ajouter un fax</button>
            </div>
            <div className="department_item">
                <FileItem title='io niveau 4' />
            </div>
        </div>
    )
}

export default Department