import React, { FunctionComponent } from "react"
import { IconButton } from "@fluentui/react/lib/Button"
import { Panel } from "@fluentui/react/lib/Panel"
import * as Icons from "@fluentui/react-icons"
import { useBoolean } from "@fluentui/react-hooks/lib/useBoolean"
import { OptionsPanelContent } from "./OptionsPanelContent"
import "./HomePage.scss"

type HomePageProps = {}

export const HomePage: FunctionComponent<HomePageProps> = (props) => {
  const [
    isOptionsPanelOpen,
    { setTrue: setOptionsPanelOpen, setFalse: setOptionsPanelClose },
  ] = useBoolean(true)

  return (
    <div>
      <IconButton className="Settings-Button" onClick={setOptionsPanelOpen}>
        <Icons.Settings28Regular />
      </IconButton>

      <Panel
        headerText="Options"
        isOpen={isOptionsPanelOpen}
        isLightDismiss
        onDismiss={setOptionsPanelClose}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        <OptionsPanelContent />
      </Panel>
    </div>
  )
}
