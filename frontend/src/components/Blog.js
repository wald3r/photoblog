import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import '../index.css';
import PhotoGallery from './PhotoGallery'

const Blog = () => {

    const [entries, setEntries] = useState([

        {
            id: "1",
            link: "http://asdfasdf",
            text: "whatever",
            date: "12.12.2012"
        },
        {
            id: "2",
            link: "http://asdfasdf",
            text: "test",
            date: "44.12.2012"
        }
    
    ])
    

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