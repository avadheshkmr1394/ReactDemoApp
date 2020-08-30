import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { DateFormat } from '../common/Utility'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import moment from 'moment'
import { ArrowRight } from 'react-bootstrap-icons';


class TripList extends React.Component {


    movementReport = () => {
        alert('Movement Report is in Pending ?')
    }

    stopageReport = () => {
        alert('Stopage Report is in Pending ?')
    }

    render() {
        const _this = this;
        const list = {
            columnDefs: [
                {
                    headerName: '#', field: '',
                    width: 32,
                    cellRenderer: function (params) {
                        let counter = 1
                        counter = counter + params.rowIndex
                        return counter;
                    }
                },
                {

                    headerName: "Trip Start (Node) To Trip End(Node)", field: "startTripDate",
                    width: 275,
                    cellRendererFramework: function (params) {
                        return <span>{params.data.startPointNode + '(' + moment(DateFormat.CastDate(params.data.startTripDate)).format('hh:mm A') + ')'}  <span style={{ color: "blue" }}><ArrowRight /></span> {params.data.endPointNode + '(' + moment((DateFormat.CastDate(params.data.endTripDate))).format('hh:mm A') + ')'}</span>
                    }
                },
                {
                    headerName: "Driver Name", field: "driverName",
                    width: 120

                },
                {
                    headerName: "Trip Expenses", field: "tripExpenses",
                    width: 98,
                    cellRendererFramework: function (params) {
                        const { tripExpenses } = params.data
                        let totalAmount = 0
                        if (tripExpenses.length > 0) {
                            tripExpenses.forEach(element => {
                                totalAmount = parseInt(totalAmount) + parseInt(element.amount)
                            });
                        }
                        return <span>Rs. {totalAmount}</span>
                    }
                },
                {
                    headerName: "Trip KM", field: "totalKm",
                    width: 68,
                    cellRendererFramework: function (params) {
                        return <span>{params.data.totalKm} KM</span>
                    }
                },
                {
                    headerName: "Trip GPS KM", field: "gpsDistance",
                    width: 92,
                    cellRendererFramework: function (params) {
                        return <span>{params.data.gpsDistance} KM</span>
                    }
                },
                {
                    headerName: "Trip Running KM", field: "tripRunningTime",
                    width: 117,
                    cellRendererFramework: function (params) {
                        return DateFormat.castTime(params.data.tripRunningTime)
                    }
                },
                {
                    headerName: "ODOMeter Reading", field: "startODOMeter",
                    width: 137,
                    cellRendererFramework: function (params) {
                        let oDOMeter1 = params.data.startODOMeter == '' ? 'NA' : params.data.startODOMeter
                        let oDOMeter2 = params.data.endODOMeter == '' ? 'NA' : params.data.endODOMeter
                        let url = 'http://staging.watsoo.com:8080'
                        let startODOMeterImage = params.data.startODOMeterUrl === null ? '' : <img style={{ height: '25px' }} src={url + params.data.startODOMeterUrl} />
                        let endODOMeterImage = params.data.endODOMeterUrl === null ? '' : <img style={{ height: '25px' }} src={url + params.data.endODOMeterUrl} />

                        return <span> {startODOMeterImage} {oDOMeter1} <span style={{ color: "blue" }}><ArrowRight /></span> {endODOMeterImage}  {oDOMeter2}  </span>
                    }
                },
                {
                    headerName: 'Action', field: '',
                    width: 310,
                    cellRendererFramework: function name(params) {
                        return <div style={{ paddingTop: '6px' }}><button type="button" onClick={() => _this.movementReport()} style={{ height: '31px', paddingTop: '1px' }} className="btn btn-success">Movement Report</button> <button type="button" style={{ height: '31px', paddingTop: '1px' }} onClick={() => _this.stopageReport()} className="btn btn-success">Stopage Report</button></div>
                    }
                }
            ],
        }
        return (

            <React.Fragment>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '200px',
                        width: '100%',
                    }}
                >
                    <AgGridReact
                        columnDefs={list.columnDefs}
                        rowData={this.props.tripList}

                    >

                    </AgGridReact>
                </div>

            </React.Fragment>
        )
    }

}

export default TripList
