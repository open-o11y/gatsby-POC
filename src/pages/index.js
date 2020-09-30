import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { Button } from 'antd'

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <div>
          <img
            src="https://video.cgtn.com/news/3d3d514d7a6b544d33457a6333566d54/video/ab8d270da7074d32b6bd9399ccb1e676/ab8d270da7074d32b6bd9399ccb1e676.jpg"
            alt="Group of pandas eating bamboo"
          />
        </div>
        
      </div>

      <Button type="primary">Primary Button</Button>
    </Layout>
  )
}
