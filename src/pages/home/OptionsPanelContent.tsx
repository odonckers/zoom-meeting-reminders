import React, { FormEvent, FunctionComponent, useState } from "react"
import { PrimaryButton } from "@fluentui/react/lib/Button"
import {
  Dropdown,
  IDropdownOption,
  IDropdownStyles,
} from "@fluentui/react/lib/Dropdown"
import RaiseHandButtonImage from "../assets/raise-hand-button.png"
import StartVideoButtonImage from "../assets/start-video-button.png"
import UnmuteButtonImage from "../assets/unmute-button.png"
import { timeIntervals } from "../../utils"
import { Reminder } from "../../models"

type OptionsPanelContentProps = {}
type DropdownOption = IDropdownOption<{
  key: string
  text: string
}>

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdownItemsWrapper: { maxHeight: "400px" },
}

const reminderOptions: Reminder[] = [
  {
    type: "img",
    img: RaiseHandButtonImage,
    title: "Remain Muted",
    text: "Please remain muted.",
  },
  {
    type: "img",
    img: StartVideoButtonImage,
    title: "Camera On",
    text:
      "If you choose to leave your camera on, be alert to maintain a modest appearance and background.",
  },
  {
    type: "img",
    img: UnmuteButtonImage,
    title: "Raise Hand",
    text: "Please use the raise hand feature to participate.",
  },
]

export const OptionsPanelContent: FunctionComponent<OptionsPanelContentProps> = (
  props,
) => {
  const meetingTimeOptions: DropdownOption[] = timeIntervals.map(
    (interval) => ({
      key: interval,
      text: interval,
    }),
  )
  const [selectedMeetingTime, setMeetingTime] = useState<DropdownOption>(
    meetingTimeOptions[12],
  )
  const onMeetingTimeChange = (
    event: FormEvent<HTMLDivElement>,
    option?: DropdownOption,
  ) => {
    if (option) {
      setMeetingTime(option)
    }
  }

  return (
    <div>
      <Dropdown
        label="Meeting Time"
        selectedKey={selectedMeetingTime ? selectedMeetingTime.key : undefined}
        onChange={onMeetingTimeChange}
        placeholder="Select an option"
        options={meetingTimeOptions}
        styles={dropdownStyles}
      />
      <PrimaryButton
        href="https://reactjs.org"
        target="_blank"
        text="Standard-ish"
      />
    </div>
  )
}
