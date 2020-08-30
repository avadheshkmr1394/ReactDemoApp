import React from 'react';
import { DateFormat } from '../common/Utility'
import { Watch, Clock, Wallet, Cart } from 'react-bootstrap-icons';


class TripSummaryHeader extends React.Component {

    render() {

        return (
            <React.Fragment>
                <table style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '5px' }}><div className='td-color'><Cart /> {this.props.tripSummary.vehicleNo}</div></td>
                            <td style={{ width: '5px' }}><div className='td-color'><Cart /> Total Trips :  {this.props.tripSummary.totalTrips}</div></td>
                            <td><div className='td-color'><Watch /> Total KM :  {this.props.tripSummary.totalKm}</div></td>
                            <td rowSpan="2" className='td-row-span' ><div className='text-color'><Wallet /> Other Exp : Rs. {this.props.tripSummary.otherExpenses}</div></td>
                        </tr>
                        <tr>
                            <td><div className='td-color'><Clock /> Trip Time : {DateFormat.castTime(this.props.tripSummary.totalTripTime)}</div></td>
                            <td><div className='td-color'><Clock /> Total Time : {DateFormat.castTime(this.props.tripSummary.totalTime)}</div></td>
                            <td><div className='td-color'><Wallet /> Total Exp : Rs. {this.props.tripSummary.totalExpences}</div></td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

}

export default TripSummaryHeader
