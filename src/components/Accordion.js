import React from "react";
import Map from "./Map";
import List from "./List"
// reactstrap components
import {
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
                            <h5 className="mb-0 panel-title">
                                <a
                                    aria-controls="collapseOne"
                                    aria-expanded={collapses.includes(1)}
                                    className="collapsed"
                                    data-parent="#accordion"
                                    href="#pablo"
                                    id="collapseOne"
                                    onClick={e => {
                                        e.preventDefault();
                                        changeCollapse(1);
                                    }}
                                >
                                    Mapa{" "}
                                    <i className="nc-icon nc-minimal-down" />
                                </a>
                            </h5>
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
                            <h5 className="mb-0 panel-title">
                                <a
                                    aria-controls="collapseTwo"
                                    aria-expanded={collapses.includes(2)}
                                    className="collapsed"
                                    data-parent="#accordion"
                                    href="#pablo"
                                    id="collapseTwo"
                                    onClick={e => {
                                        e.preventDefault();
                                        changeCollapse(2);
                                    }}
                                >
                                    Lista znaczników{" "}
                                    <i className="nc-icon nc-minimal-down" />
                                </a>
                            </h5>
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