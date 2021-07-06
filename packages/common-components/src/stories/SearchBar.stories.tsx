import React from "react"
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import { SearchBar } from "../SearchBar"
import { SizeOption } from "./types"

export default {
  title: "Search Bar",
  component: SearchBar,
  excludeStories: /.*Data$/,
  decorators: [withKnobs]
}

const sizeOptions: SizeOption[] = ["large", "medium", "small"]

export const actionsData = {
  onChange: action("onChange"),
  onFormSubmit: action("Submit Form")
}

export const DefaultStory = (): React.ReactNode => (
  <SearchBar
    onChange={(e) => actionsData.onChange(e.target.value)}
    size={select("Size", sizeOptions, "large")}
    disabled={boolean("Disabled", false)}
    isLoading={boolean("Loading", false)}
    placeholder={text("Placeholder", "Search…")}
  />
)
