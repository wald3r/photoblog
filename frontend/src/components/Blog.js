import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import '../index.css';
import PhotoGallery from './PhotoGallery'
import blogService from '../services/blogService'

const Blog = () => {

    useEffect(() => {
        getBlogEntries()
    }, [])

    const [entries, setEntries] = useState([])
    
    const getBlogEntries = async () => {
        console.log(blogService.getBlogEntries())
        setEntries(await blogService.getBlogEntries())
    }

    return (
        <div className="container">
            <Table responsive className='table table-hover'>
                <tbody>
                {entries.map(entry => (
                    <tr key={entry.id}>
                        <td>
                            {entry.text}
                        </td>
                        <td>
                            <PhotoGallery />
                        </td>
                        <td>
                            {entry.date}
                        </td>
                    </tr>
                ))}     
                </tbody>
            </Table>
           

        </div>
    )


}

export default Blog