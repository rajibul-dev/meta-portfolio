import PageHeading from "../_components/ui/page-heading";
import Button from "../_components/ui/button";

export default function NotFound() {
  return (
    <main>
      <PageHeading
        paragraph="Not every thought makes it onto the page. This one may simply not exist yet."
      >
        This piece doesn’t seem to exist.
      </PageHeading>

      <div className="primary-container pb-20">
        <Button href="/writing">Back to writing →</Button>
      </div>
    </main>
  );
}
