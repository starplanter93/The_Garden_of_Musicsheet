export const emailRegex =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

//최소 8글자 ~ 최대 25글자 + 영어 1개 이상 필수 (소문자 혹은 대문자) + 특수문자 1개 이상 필수 + 숫자 1개 이상 필수
export const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;