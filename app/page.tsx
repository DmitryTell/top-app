import { HTag, Button, Paragraph, Tag } from "@/components";

export default function Home() {
  return (
    <>
      <HTag tag="h1">Title h1</HTag>
      <Tag size="small">Ghost</Tag>
      <Tag size="large" color="red" href="https://hh.ru">Red</Tag>
      <Paragraph size="sm">
        This is a small text paragraph...
      </Paragraph>
      <HTag tag="h2">Title h2</HTag>
      <Paragraph size="mid">
        This is a middle text paragraph...
      </Paragraph>
      <HTag tag="h3">Title h3</HTag>
      <Paragraph size="lg">
        This is a large text paragraph...
      </Paragraph>
      <Button appearance="primary">
        Primary
      </Button>
      <Button appearance="ghost" arrow="right">
        Ghost
      </Button>
    </>
  );
}
