import React from "react";
import Map from "./Map";
import List from "./List"
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Collapse,
} from "reactstrap";

function Accordion({ state, handleViewport, addMarker, selectMarker, closePopup, markerDragEnd, handleDelete }) {
    // collapse states and functions
    const [collapses, setCollapses] = React.useState([]);
    const changeCollapse = collapse => {
        if (collapses.includes(collapse)) {
            setCollapses(collapses.filter(prop => prop !== collapse));
        } else {
            setCollapses([...collapses, collapse]);
        }
    };
    return (
        <>
            <div id="acordeon">
                <div aria-multiselectable={true} id="accordion" role="tablist">
                    <Card className="no-transition">
                        <CardHeader className="card-collapse" id="headingOne" role="tab">
                            <Button
                                className="btn-round panel-title collapsed"
                                color="primary"
                                size="lg"
                                outline
                                aria-controls="collapseOne"
                                aria-expanded={collapses.includes(1)}
                                data-parent="#accordion"
                                href="#pablo"
                                id="collapseOne"
                                onClick={e => {
                                    e.preventDefault();
                                    changeCollapse(1);
                                }}
                            >
                                <i
                                    className="fas fa-map-marker-alt pr-2"
                                ></i>
                                <span>Mapa</span>
                            </Button>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(1)}>
                            <CardBody>
                                <Map
                                    state={state}
                                    handleViewport={handleViewport}
                                    addMarker={addMarker}
                                    selectMarker={selectMarker}
                                    closePopup={closePopup}
                                    markerDragEnd={markerDragEnd}
                                />
                            </CardBody>
                        </Collapse>
                        <CardHeader
                            className="card-collapse"
                            id="headingTwo"
                            role="tab"
                        >
                            <Button
                                className="btn-round panel-title collapsed"
                                color="primary"
                                size="lg"
                                outline
                                aria-controls="collapseOne"
                                aria-expanded={collapses.includes(2)}
                                data-parent="#accordion"
                                href="#pablo"
                                id="collapseOne"
                                onClick={e => {
                                    e.preventDefault();
                                    changeCollapse(2);
                                }}
                            >
                                <i
                                    className="fas fa-map-marker-alt pr-2"
                                ></i>
                                <span>Współrzędne</span>
                            </Button>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(2)}>
                            <CardBody>
                                <List
                                    coordinates={state.coordinates}
                                    handleDelete={handleDelete}
                                />
                            </CardBody>
                        </Collapse>
                    </Card>
                </div>
                {/* end acordeon */}
            </div>
        </>
    );
}

export default Accordion;