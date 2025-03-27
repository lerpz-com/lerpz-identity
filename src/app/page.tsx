import { Button, Container, Text, Title } from '@mantine/core';

export default function HeroText() {
  return (
    <Container size={1400}>
      <div>
        <Title>
          Automated AI{' '}
          <Text component="span" inherit>
            code reviews
          </Text>{' '}
          for any stack
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed">
            Build more reliable software with AI companion. AI is also trained to detect lazy
            developers who do nothing and just complain on Twitter.
          </Text>
        </Container>

        <div>
          <Button size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button size="lg">
            Purchase a license
          </Button>
        </div>
      </div>
    </Container>
  );
}
