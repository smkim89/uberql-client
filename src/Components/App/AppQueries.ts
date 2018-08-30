import { gql } from "apollo-boost";

// Apollo에서 적용한 auth 사용. @client는 클라이언트 서버에 요청하는 쿼리에 사용.
export const IS_LOGGED_IN = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;