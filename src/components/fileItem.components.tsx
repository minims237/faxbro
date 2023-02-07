import React from "react"
import pdf from '../assets/img/pdf.png'
import './styles/fileItem.styles.css'
const FileItem=(props:any)=>{
    return(
        <div className="fItem">
            
            <a href="../assets/img/pdf.png" download={true}>
                <img src={pdf} width='20'/>
                <p>{props.title}</p>

            </a>          
           
        </div>
    )
}
export default FileItem