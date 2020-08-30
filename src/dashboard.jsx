import React from 'react'
import { getTripSummary } from './apiService'
import { connect } from 'react-redux'
import TripSummaryHeader from './components/tripSummaryHeader'
import TripDetails from './components/tripDetails'
import TripList from './components/tripList'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Search } from 'react-bootstrap-icons';




class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            fromDate: new Date(),
            toDate: new Date()
        }
    }

    exportDate = () => {
        alert("Export is in Pending ?")
    }

    componentWillMount() {
        const request = {
            body:
            {
                "clientId": 10,
                "dataRecord": {
                    "userRoleId": 4,
                    "userRoleName": "COMPANY",
                    "userId": 10
                },
                "fromDate": 1577888571659,
                "toDate": 1593613371659,
                "tripId": 36
            }
        }
        this.props.getTripSummary(request)
    }
    changeFromDate = (fromDate) => {
        this.setState({
            fromDate: fromDate
        })
    }
    changeToDate = (toDate) => {
        this.setState({
            toDate: toDate
        })
    }

    render() {
        const tripSummaryData = [this.props.tripSummary]
        return (
            <React.Fragment>
                <div>
                    <div style={{ float: 'left' }} >
                        <span style={{ float: 'left' }}>Trip Summary</span><br></br>
                        <a href='#' style={{ textDecoration: 'none' }}>Dashboard</a>/ <a href='#' style={{ color: 'black', textDecoration: 'none' }}>Trip Summary</a>
                    </div>
                    <div className='row' style={{ float: 'right' }}>
                        <div>
                            From  <DatePicker className={'form-control'} selected={this.state.fromDate} onChange={this.changeFromDate} /><span></span>
                        </div>
                        <div className='form-group' style={{ float: 'right', marginLeft: '10px' }} >
                            To  <DatePicker className={'form-control'} selected={this.state.toDate} onChange={this.changeToDate} />
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                            <button className='btn btn-primary' ><Search /></button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                            <button className='btn btn-primary' onClick={() => this.exportDate()} >Export</button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        tripSummaryData.map((item, index) => {
                            return <div key={index}>
                                <TripSummaryHeader tripSummary={item} />
                                {
                                    item.tripDetails && item.tripDetails.map((tripDetails, index) => {
                                        return <div className='summary-details' key={index}> <TripDetails tripDetails={tripDetails} />
                                            {tripDetails.tripLists && <TripList tripList={tripDetails.tripLists} />}
                                        </div>
                                    })
                                }
                            </div>
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tripSummary: state.tripSummary
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTripSummary: (request) => dispatch(getTripSummary(request))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)