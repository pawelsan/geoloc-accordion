import React from "react";
import Map from "./Map";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    Collapse,
} from "reactstrap";

function Accordion() {
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
                                <Map />
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
                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                aliqua put a bird on it squid single-origin coffee nulla
                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                beer labore wes anderson cred nesciunt sapiente ea proident.
                                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                beer farm-to-table, raw denim aesthetic synth nesciunt you
                                probably haven't heard of them accusamus labore sustainable
                                VHS.
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