import { useState } from "react";
import type { PaymentType, CardCompany } from "../../types/index";
import { CARD_COMPANIES, installmentOptions } from "../../constants/index";


function TransactionForm () {
 const [paymentType, setPaymentType] = useState<PaymentType>('lump');
 const [cardCompany, setCardCompany] = useState<CardCompany | ''>('');
 const [amount, setAmount] = useState('');
 const [memo, setMemo] = useState('');
 const [date, setDate] = useState('');
 const [installmentMonth, setInstallmentMonth] = useState(1);

 return(
  <div className="transaction-form">
   <div className="form-field">
    <label htmlFor="">금액</label>
    <input type="number" placeholder="금액" value={amount} onChange={(e)=>setAmount(e.target.value)} />
    <div>{amount}</div>
   </div>
   <div className="form-field">
    <label htmlFor="">날짜</label>
    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
    <div>{date}</div>
   </div>
   <div className="form-field">
    <label htmlFor="">메모</label>
    <input type="text" placeholder="메모" value={memo} onChange={(e)=>setMemo(e.target.value)} />
    <div>{memo}</div>
   </div>
   <div className="form-field">
    <label htmlFor="">카드사</label>
    <select name="" id="" onChange={(e)=>setCardCompany(e.target.value as CardCompany | '')}>
     <option value="">카드사 선택</option>
     {CARD_COMPANIES.map((card)=>(
      <option key={card.id} value={card.id}>{card.label}</option>
     ))}
    </select>
     <div>{cardCompany}</div>
   </div>
   <div className="form-field">
    <span className="field-label">결제 방식</span>
    <div className="button-group">
     <button onClick={()=>setPaymentType('lump')} className={paymentType === 'lump' ? 'active' : ''}>일시불</button>
     <button onClick={()=>setPaymentType('installment')} className={paymentType === 'installment' ? 'active' : ''}>할부</button>
    </div>
    <div>
     {paymentType === 'installment' && 
     <select onChange={(e)=>setInstallmentMonth(Number(e.target.value))}>
      {installmentOptions.map((month)=>(
       <option value={month} key={month}>{month}개월</option>
      ))}
     </select>}
     <div>{installmentMonth}</div>
    </div>
    <div>
    </div>
   </div>
   <button>저장</button>
  </div>
 )
}
export default TransactionForm;