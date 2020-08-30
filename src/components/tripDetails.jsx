import React from 'react';
import { DateFormat } from '../common/Utility'
import moment from 'moment'


class TripDetails extends React.Component {

    getDate = (day) => {
        return moment(DateFormat.CastDate(day)).format('MM/DD/YYYY')
    }


    getTime = (day) => {
        return moment(DateFormat.CastDate(day)).format('HH:ss A')
    }

    getTotalKM = (km) => {
        let totalKm = 0;
        km.forEach(element => {
            totalKm = parseInt(totalKm) + parseInt(element.totalKm)
        });
        return totalKm;
    }

    getTotalExpense = (exp) => {
        let totalExpense = 0
        exp.forEach(element => {
            if (element.tripExpenses.length > 0) {
                element.tripExpenses.forEach(expense => {
                    debugger
                    totalExpense = parseInt(totalExpense) + parseInt(expense.amount)
                })
            }

        })
        return totalExpense;
    }

    render() {

        const { tripLists } = this.props.tripDetails

        return (
            <React.Fragment>
                <table style={{ width: '100%', backgroundColor: '#131e2f', color: 'white' }}>
                    <tbody>
                        <tr>
                            <td style={{ float: 'left' }}><span>Date: </span>{this.getDate(this.props.tripDetails.startDay) + ' at ' + this.getTime(this.props.tripDetails.startDay) + ' - ' + this.getDate(this.props.tripDetails.endDay) + ' at ' + this.getTime(this.props.tripDetails.endDay) + ' (' + DateFormat.castTime(this.props.tripDetails.dailyRunningTime) + ')'} </td>
                            <td><span>Total KM:</span> {this.getTotalKM(tripLists) + ' KM '}<span>Total Expense: </span>{this.getTotalExpense(tripLists)}</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

}

export default TripDetails
