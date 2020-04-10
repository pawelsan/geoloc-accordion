import React from 'react';
import { Table, Button } from 'reactstrap';

const List = ({ coordinates, handleDelete }) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Szerokość</th>
                    <th>Długość</th>
                    <th>Usuń</th>
                </tr>
            </thead>
            <tbody>
                {coordinates.map(marker =>
                    <tr
                        key={marker.id}
                    >
                        <th scope="row">{coordinates.indexOf(marker) + 1}</th>
                        <td>{marker.latitude}</td>
                        <td>{marker.longitude}</td>
                        <td>
                            <Button
                                className="btn-round btn-icon"
                                color="danger"
                                size="small"
                                onClick={() => handleDelete(marker.id)}
                            >
                                <i className="fas fa-trash-alt" />
                            </Button>
                        </td>
                    </tr>
                )
                }
            </tbody>
        </Table>
    );
}

export default List;