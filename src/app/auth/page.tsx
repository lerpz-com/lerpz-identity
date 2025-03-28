"use client"

import SignIn from "@lerpz/app/auth/sign-in"
import SignUp from "@lerpz/app/auth/sign-up"
import {
  Container,
  Paper,
  Tabs,
  Title,
} from "@mantine/core"
import { useEffect, useState } from "react"

export default function Auth() {
  const [tab, setTab] = useState<"sign-in" | "sign-up">("sign-in")

  const updateHash = (tab: string | null) => {
    switch (tab) {
      case "sign-up":
        setTab("sign-up")
      case "sign-in":
        setTab("sign-in")
      default:
        setTab("sign-in")
    }
  }

  useEffect(() => {
    switch (tab) {
      case "sign-up":
        setTab("sign-up")
      case "sign-in":
        setTab("sign-in")
    }
  }, [tab])

  return (
    <Container size={420} m="auto">
      <Title ta="center">
        Welcome back!
      </Title>
      <Paper withBorder shadow="md" mt={40}>
        <Tabs value={tab} onChange={updateHash}>
          <Tabs.List grow>
            <Tabs.Tab className="rounded-r-none" value="sign-up" onClick={() => setTab("sign-up")}>
              SIGN UP
            </Tabs.Tab>
            <Tabs.Tab className="rounded-l-none" value="sign-in" onClick={() => setTab("sign-in")}>
              SIGN IN
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="sign-up">
            <SignUp/>
          </Tabs.Panel>
          <Tabs.Panel value="sign-in">
            <SignIn/>
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Container>
  )
}
