import React, { useEffect, useState } from 'react'
import './Enquiry.css'
import jsondatas from '../assets/enquiry.json'
const Enquiry = () => {
    let [show, setshow] = useState(false)
    let datas = jsondatas
    useEffect(() => {
        // checking Enquiry data
        if (datas.length == 0) {
            setshow(true)
        }
    }, [])
    return (
        <div className='p-3 p-sm-5'>
            <h3 className='pb-5'>Enquiry Details :</h3>
            {show && <h1 className='d-flex justify-content-center mt-5'>Enquiry Details Not Available</h1>}
            {!show && datas.map((data) => (
                <div className='shadow overflow-x-auto bg-light p-3 mt-3 mb-5 w-75 container' key={data.enquiryid}>
                    <h5 className='py-3'>Enquiry : {data.enquiryid}</h5>
                    <table className='table table-responsive table-bordered d-none d-sm-block'>
                        <tbody>
                            <tr className='table-dark'>
                                <th className='text-center'>Enquiry Id</th>
                                <th>Cutomer Name </th>
                                <th>Phone Number </th>
                                <th>Address </th>
                                <th> System Required</th>
                                <th>Fault/issue </th>
                                <th>Service Type </th>
                                <th>Enquiry Date </th>
                            </tr>
                            <tr>
                                <td className='text-center'>{data.enquiryid}</td>
                                <td>{data.cname}</td>
                                <td>{data.ph} </td>
                                <td>{data.address} </td>
                                <td>{data.SR}</td>
                                <td>{data['fault/issue']}</td>
                                <td>{data['Service type']}</td>
                                <td>{data.edate}</td>
                            </tr>

                        </tbody>

                    </table>
                    {/* for mobile */}
                    <table className='table table-responsive table-bordered d-block d-sm-none '>
                        <tbody>
                            <tr>
                                <th className='text-center table-dark'>Enquiry Id</th>
                                <td className='text-center'>{data.enquiryid}</td>
                            </tr>
                            <tr>
                                <th className='table-dark'>Cutomer Name </th>
                                <td>{data.cname}</td>
                            </tr>
                            <tr>
                                <th className='table-dark'>Phone Number </th>
                                <td>{data.ph} </td>
                            </tr>
                            <tr>
                                <th className='table-dark'>Address </th>
                                <td>{data.address} </td>
                            </tr>
                            <tr>
                                <th className='table-dark'> System Required</th>
                                <td>{data.SR}</td>
                            </tr>
                            <tr>
                                <th className='table-dark'>Fault/issue </th>
                                <td>{data['fault/issue']}</td>
                            </tr>
                            <tr>
                                <th className='table-dark'>Service Type </th>
                                <td>{data['Service type']}</td>
                            </tr>
                            <tr>
                                <th className='table-dark'>Enquiry Date </th>
                                <td>{data.edate}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='py-3'>
                        <h5 className=''>Task Progress</h5>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-3 g-3">
                            <div className="col">[ {data.progress.includes("Enquiry Registerd") ? "✔️" : "❌"} ] Enquiry Registered</div>
                            <div className="col">[ {data.progress.includes("Quotion Created") ? "✔️" : "❌"} ] Quotation Created</div>
                            <div className="col">[ {data.progress.includes("Quotation Sent") ? "✔️" : "❌"} ] Quotation Sent</div>
                            <div className="col">[ {data.progress.includes("Quotation Follow Up") ? "✔️" : "❌"} ] Quotation Follow Up</div>
                            <div className="col">[ {data.progress.includes("Quotation Accepted") ? "✔️" : "❌"} ] Quotation Accepted</div>
                            <div className="col">[ {data.progress.includes("Technician Assigned") ? "✔️" : "❌"} ] Technician Assigned</div>
                            <div className="col">[ {data.progress.includes("Service Completed") ? "✔️" : "❌"} ] Service Completed</div>
                            <div className="col">[ {data.progress.includes("Demo Completed") ? "✔️" : "❌"} ] Demo Completed</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Enquiry