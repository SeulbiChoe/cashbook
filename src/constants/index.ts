import type { CardCompany } from "../types"

//할부 최대 개월 수 : 12
export const MAX_INSTALLMENT = 12;
export const installmentOptions = Array.from({length: MAX_INSTALLMENT}, (_, i) => i + 1);

export const CARD_COMPANIES = [
  {id: 'woori' as CardCompany, label: '우리카드'},
  {id: 'lotte' as CardCompany, label: '롯데카드'},
  {id: 'samsung' as CardCompany, label: '삼성카드'},
  {id: 'hyundai' as CardCompany, label: '현대카드'},
  {id: 'shinhan' as CardCompany, label: '신한카드'},
  {id: 'kb' as CardCompany, label: 'KB국민카드'},
  {id: 'hana' as CardCompany, label: '하나카드'},
  {id: 'bc' as CardCompany, label: 'BC카드'},
]