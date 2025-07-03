import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfocard from '../card/TransactionInfocard'
import moment from 'moment'

const RecentIncome = ({transaction,onSeeMore}) => {
  return (
    <div className='card'>
        <div className="flex items-center justify-between">
            <h5 className='text-lg'>Income</h5>
            <button className='card-btn' onClick={onSeeMore}>See More <LuArrowRight className='text-base'/></button>
            </div>     
<div className="mt-6">
    {transaction?.slice(0,5)?.map((item,index)=>(
        <TransactionInfocard
        key={item._id || index}
        title={item.source}
        icon={item.icon}
        date={moment(item.date).format("Do MMM YYYY")}
        amount={item.amount}
        type="income"
        hideDeleteBtn/>
    ))}
</div>
    </div>
  )
}

export default RecentIncome
