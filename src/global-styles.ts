import reset from "styled-reset";
import { injectGlobal } from "./typed-components";

// 아래와 같이 설정하면 타입스크립트 설정 무시.
 // tslint:disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  ${reset};
  * {
      box-sizing: border-box;
  }
  body{
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a{ 
      color:inherit;
      text-decoration:none;
  }
  input,
  button{
      &:focus,
      &:active{outline:none}
  }
`;