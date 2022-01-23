/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  return (
    <div>
      <p>
        Built on Gatsby Cloud via <a href="https://VerdaPress.uk">VerdaPress</a>.
        Engineered by the Integral
      </p>
      <small>23.01.2022</small>
    </div>
  )
}

export default Bio
