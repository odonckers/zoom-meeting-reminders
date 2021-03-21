import React, { FunctionComponent } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { HomePage } from "./pages"

const App: FunctionComponent = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
