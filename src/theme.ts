import { firaMono, poppins } from "@lerpz/app/layout"
import { createTheme } from "@mantine/core"

const theme = createTheme({
  defaultRadius: "lg",
  fontFamily: poppins.style.fontFamily,
  fontFamilyMonospace: firaMono.style.fontFamily,
})

export default theme
