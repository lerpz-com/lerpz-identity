import { Button, Container, Group, Text, Title } from "@mantine/core"
import Link from "next/link"

export default function Home() {
  return (
    <Container size={800} className="flex flex-col justify-center">
      <Title className="text-[62px]/[1.2] sm:text-[82px][1.1] text-center">
        Start{" "}
        <Text component="span" variant="gradient" gradient={{ from: "blue", to: "cyan" }} inherit>
          Your Story
        </Text>{" "}
        With Us
      </Title>

      <Text className="text-[32px] sm:text-[24px] text-center" c="dimmed" pt="xl">
        Access everything you need in one simple location. Our easy-to-navigate
        portal lets you manage requests, find information, and update your
        details without hassle—designed specifically to make your workday
        smoother.
      </Text>

      <Group className="mx-auto" pt="xl">
        <Button
          size="xl"
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          component={Link}
          href="/auth"
        >
          Sign Up
        </Button>
        <Button
          size="xl"
          variant="default"
          component={Link}
          href="/auth"
        >
          Sign In
        </Button>
      </Group>
    </Container>
  )
}
