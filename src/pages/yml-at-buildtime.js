import React from "react"
import YAMLData from "../../content/My-YAML-Content.yaml"
import Layout from "../components/layout"

const YAMLbuildtime = () => (
  <Layout>
    <h1>{YAMLData.title}</h1>
    <ul>
      {YAMLData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </Layout>
)
export default YAMLbuildtime