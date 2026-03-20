//하단 탭 정보
export type TabType = 'home' | 'history' | 'stats';

// 카드사 정보
export type CardCompany =
  | 'samsung'   // 삼성
  | 'hyundai'   // 현대
  | 'shinhan'   // 신한
  | 'kb'        // KB국민
  | 'lotte'     // 롯데
  | 'hana'      // 하나
  | 'woori'     // 우리
  | 'bc'        // BC

// 결제 방식
export type PaymentType = 'lump'| 'installment' // 일시불 | 할부

// 할부 정보 (할부일 때만 사용)
export interface InstallmentInfo {
  totalMonths: number    // 총 할부 개월 수 (예: 12)
  currentMonth: number   // 현재 몇 번째 (예: 3)
}

// 지출 내역 한 건
export interface Transaction {
  id: string
  amount: number              // 금액
  memo: string                // 메모
  date: string                // 날짜 (예: "2026-03-05")
  cardCompany: CardCompany    // 카드사
  paymentType: PaymentType    // 일시불 or 할부
  installment?: InstallmentInfo // 할부면 이 정보도 있음
}

// 월 (화면에서 달 이동할 때 사용)
export interface YearMonth {
  year: number
  month: number  // 1~12
}