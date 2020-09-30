// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import { css } from "@emotion/core"

// export default function Contributors({ data }) {
//   // console.log(data.allGithubData.nodes[0].data.repository.collaborators.nodes[1].name)
//   // {
//   //   data.allGithubData.nodes[0].data.repository.collaborators.nodes.map((obj, index) => {
//   //     console.log(obj)
//   //   })
//   // }
//   return (
//     <Layout>
//       <h1>Contributors of opentelemetry-js</h1>
//       <table>
//           <thead>
//             <tr>
//               <th>Avatar</th>
//               <th>Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.allGithubData.nodes[0].data.repository.collaborators.nodes.map((obj, index) => 
//               <tr key={index}>
//                 <td>
//                   <img 
//                     src={obj.avatarUrl}
//                     alt="Avatar" 
//                     css={css`
//                     vertical-align: middle;
//                     width: 120px;
//                     height: 120px;
//                     border-radius: 50%;
//                     `}/>
//                 </td>
//                 <td>{obj.name}</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     allGithubData {
//       nodes {
//         data {
//           repository {
//             collaborators {
//               nodes {
//                 name
//                 avatarUrl
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `