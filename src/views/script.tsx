import * as React from "react"
import * as ReactDom from "react-dom"
import 'regenerator-runtime/runtime'
import MoeBooru from "./api/moebooru"
import HomePage from "./homePage"

ReactDom.render(HomePage(), document.getElementById("app"))
