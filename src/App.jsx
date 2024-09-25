import React from "react"
import { Route, Routes } from "react-router"
import { generateRoutes } from "./routes"
import { appRoutes } from "./routes/appRoutes"
import Layout from "./components/Layout/Layout"
function App() {

  return (
    <React.Fragment>
      <Layout>
        <Routes>
          {appRoutes.map((route, index) => (
            <Route path={route.path} Component={route.element} key={index} />
          ))}
        </Routes>
      </Layout>
    </React.Fragment>
  )
}

export default App
