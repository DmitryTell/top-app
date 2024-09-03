import { HTag, Button } from "@/components";

export default function Home() {
  return (
    <>
      <HTag tag="h1">Project started</HTag>
      <Button appearance="primary">
        Primary
      </Button>
      <Button appearance="ghost" arrow="right">
        Ghost
      </Button>
    </>
  );
}
