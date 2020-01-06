export interface AlertConfig {
  message: string; // 출력 메세지
  callbackFnY?: any; // 콜백 함수
  confirm?: any; // 확인버튼 text
}

export interface ConfirmConfig {
  message: string; // 출력 메세지
  callbackFnY?: any; // 확인 콜백함수
  callbackFnN?: any; // 취소 콜백함수
  confirm?: string; // 확인버튼 text
  cancel?: string; // 취소버튼 text
}
