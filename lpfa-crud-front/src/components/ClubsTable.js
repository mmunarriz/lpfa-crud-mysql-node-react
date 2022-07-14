import { Table, Container } from "react-bootstrap"
import React, { useState, useEffect } from "react";


function ClubsTable() {
    const URL = "http://localhost:8080/api/clubs/accredited"
    const [data, setData] = useState([])


    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(json => setData(json))
    }, [])
    // console.log(data)

    return (
        <Container>
            <h2 className="text-center mt-4">Accredited clubs</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(el => {
                        return (
                            <tr>
                                <td>{el.name}</td>
                                <td>{el.full_name}</td>
                                <td>{el.address}</td>
                                <td>{el.phone}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        </Container >
    );
}

export default ClubsTable;
