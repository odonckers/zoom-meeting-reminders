import React, { FunctionComponent } from "react"
import logo from "../../logo.svg"
import "../../App.css"

type OptionsPageProps = {}

export const OptionsPage: FunctionComponent = (props: OptionsPageProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Netlify
        </a>
      </header>
    </div>
  )
}
