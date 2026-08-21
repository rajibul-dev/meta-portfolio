import PageHeading from "../_components/ui/page-heading";
import Button from "../_components/ui/button";

export default function NotFound() {
  return (
    <main>
      <PageHeading
        paragraph="Which, honestly, is fairly normal for the lab. Some ideas are still waiting to become something."
      >
        Nothing here yet.
      </PageHeading>

      <div className="primary-container pb-20">
        <Button href="/lab">Back to the lab →</Button>
      </div>
    </main>
  );
}
