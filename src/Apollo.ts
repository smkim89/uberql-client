import ApolloClient, { Operation } from "apollo-boost";


const client = new ApolloClient({
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

