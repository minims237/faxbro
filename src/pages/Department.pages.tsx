import React from "react"
import FileItem from "../components/fileItem.components"
import TopBar from "../components/TopBar.components"
import './styles/department.styles.css'
const Department = () => {
    return (
        <div className="department container mx-auto w-10/12">
            

            <div className="dtxt">
                
                <div className="flex justify-center md:justify-start">
                    <h3 className="font-bold text-2xl md:text-3xl text-center">Old enspm teacher exam topic</h3>
                </div>
                <div>
                    <button className="btn"><span>+</span> add fax</button>
                </div>

            </div>
            <div className="slt">
                <div className="slt_item">
                    <h4>department</h4>
                    <select className="form-select appearance-none ">
                        <option>Infotel</option>
                    </select>
                </div>
                <div className="slt_item">
                    <h4>level</h4>
                    <select className="form-select appearance-none ">
                        <option>Infotel</option>
                    </select>
                </div>
                <div className="slt_item">
                    <h4>test title</h4>
                    <select className="form-select appearance-none ">
                        <option>Infotel</option>
                    </select>
                </div>
            </div>
            <div className="department_item">
                <table className="min-w-full divide-y-8 divide-primary">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 text-left text-xs md:text-sm font-bold tracking-wider">Department</th>
                            <th className="px-4 py-3 text-left text-xs md:text-sm font-bold tracking-wider">Test title</th>
                            <th className="px-4 py-3 text-left text-xs md:text-sm font-bold tracking-wider">Level</th>
                            <th className="px-4 py-3 text-left text-xs md:text-sm font-bold tracking-wider">Department</th>
                            <th className="px-4 py-3 text-left text-xs md:text-sm font-bold tracking-wider">Download</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary">
                        <tr>
                            <td className="px-4 py-3 whitespace-nowrap bg-white">
                                <div className="text-xs text-gray-900">
                                    Infotel
                                </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap bg-white">
                                <div className="text-xs text-gray-900">
                                    Infotel
                                </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap bg-white">
                                <div className="text-xs text-gray-900">
                                    Infotel
                                </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap bg-white">
                                <div className="text-xs text-gray-900">
                                    Infotel
                                </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap bg-white">
                                <div className="text-xs text-gray-900">
                                    Infotel
                                </div>
                            </td>
                        </tr>
                    </tbody>
                  
                </table>
            </div>
        </div>
    )
}

export default Department