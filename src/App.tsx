import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { OptionsPage } from "./pages"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <OptionsPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
