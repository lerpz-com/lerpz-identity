import { Anchor, Button, Checkbox, Group, PasswordInput, Stack, TextInput } from "@mantine/core"

export default function SignUp() {
  return (
    <Stack p={30} mt={30}>
      <TextInput label="Email" placeholder="you@lerpz.com" required />
      <PasswordInput label="Password" placeholder="Your password" required mt="md" />
      <Group justify="space-between" mt="lg">
        <Checkbox label="Remember me" />
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Group>
      <Button fullWidth mt="xl">
        Sign in
      </Button>
    </Stack>
  )
}
