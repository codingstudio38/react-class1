import React from 'react'
import './../App.css';
import { Button, Table } from 'react-bootstrap';
import { Reusecomponent } from './../Reusecomponent/Reusecomponent';
function Arraymap() {
    const student = ["Vidyut", "Bidyut", "BK", "VK"];
    const list = [
        {
            name: "Bidyut", email: "bidyut@gmail.com", contact: 1234567890, address:
                [{ dist: "Malkangiri", city: "BBSR", state: "Odisha", country: "India" }]
        },
        {
            name: "Vidyut", email: "vidyut@gmail.com", contact: 4987654321, address:
                [{ dist: "Malkangiri", city: "BBSR", state: "Odisha", country: "India" }]
        },
        {
            name: "Bidyut 1", email: "bidyut1@gmail.com", contact: 111, address:
                [{ dist: "Malkangiri", city: "BBSR", state: "Odisha", country: "India" }]
        }
    ];
    return (
        <div className="User">
            <h2>Array map</h2>

            <Button variant="primary" onClick={() => alert("Hello ..")}>Click</Button>
            <h2>This is reuse component</h2>
            {
                student.map((item, index) =>
                    <h4 key={index}>{item}</h4>
                    // <Reusecomponent data={item} id={index} />
                )
            }
            <h2>Bootstrap Table/Nested List with Nested Array</h2>
            <Table striped bordered hover className='maptbl' align='center'>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) =>
                            <tr key={index} id={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>
                                    <table>
                                        <tbody>
                                            {
                                                item.address.map((data, i) =>
                                                    <tr key={i}>
                                                        <td>{data.dist}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.state}</td>
                                                        <td>{data.country}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Arraymap;