import React from 'react';
import { Table } from 'reactstrap';

const List = ({ coordinates }) => {
    return (

        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Longitude</th>
                    <th>Latitude</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {coordinates.map(marker =>
                    <tr
                        key={marker.id}
                    >
                        <th scope="row">{coordinates.indexOf(marker)}</th>
                        <td>{marker.longitude}</td>
                        <td>{marker.latitude}</td>
                        <td><button>Delete</button></td>
                    </tr>
                )

                }
                {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
            </tbody>
        </Table>
    );
}

export default List;