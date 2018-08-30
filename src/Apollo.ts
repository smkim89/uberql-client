import ApolloClient, { Operation } from "apollo-boost";


const client = new ApolloClient({
    // client 를 위한 기본적인 셋팅정보를 담을 수 있음.
    // 언어, 통화, 로그인  등등..
    //  
    clientState: {
      defaults: {
        auth: {
          __typename: "Auth",
          isLoggedIn: Boolean(localStorage.getItem("jwt"))
        }
      },
      resolvers: {
        Mutation: {
          // parent, args, context
          logUserIn: (_, { token }, { cache }) => {
            localStorage.setItem("jwt", token);
            cache.writeData({
              data: {
                auth: {
                  __typename: "Auth",
                  isLoggedIn: true
                }
              }
            });
            return null;
          },
          logUserOut: (_, __, { cache }) => {
            localStorage.removeItem("jwt");
            cache.writeData({
              data: {
                __typename: "Auth",
                isLoggedIn: false
              }
            });
            return null;
          }
        }
      }
    },
    // apollo 에서는 모든 리퀘스트에 아래와같이 데이터를 심을 수 있다. 리덕트에서는 설정을해야함.
    request: async (operation: Operation) => {
        operation.setContext({
          headers: {
            "X-JWT": localStorage.getItem("jwt") || ""
          }
        });
      },
    uri : "http://localhost:4000/graphql"
});

export default client;

