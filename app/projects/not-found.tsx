import PageHeading from "../_components/ui/page-heading";
import Button from "../_components/ui/button";

export default function NotFound() {
  return (
    <main>
      <PageHeading
        paragraph="Either the link is wrong, or this project is still somewhere between an idea and something worth putting here."
      >
        I couldn’t find that project.
      </PageHeading>

      <div className="primary-container pb-20">
        <Button href="/projects">View projects →</Button>
      </div>
    </main>
  );
}
