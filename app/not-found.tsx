import PageHeading from "./_components/ui/page-heading";
import Button from "./_components/ui/button";

export default function NotFound() {
  return (
    <main>
      <PageHeading
        paragraph="The page you were looking for does not seem to exist, or perhaps it has moved somewhere else."
      >
        This page doesn’t seem to exist.
      </PageHeading>

      <div className="primary-container pb-20">
        <Button href="/">Back home →</Button>
      </div>
    </main>
  );
}
