import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types.js";
import Image from "next/image";
import { Code } from "bright";
import Video from "./video";

Code.theme = "material-default";
Code.lineNumbers = false;

type MDXContentProps = {
  source: string;
};

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      {...props}
      className="hidden font-serif text-4xl leading-tight tracking-tight text-sand-900 md:text-5xl"
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }) => (
    <h2
      {...props}
      className="mt-12 mb-5 border-b border-sand-200 pb-2 font-serif text-3xl leading-tight tracking-tight text-sand-900 max-md:leading-[1.3] mdx-h2-word-spacing"
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }) => (
    <h3
      {...props}
      className="mt-10 mb-4 font-serif text-2xl leading-tight tracking-tight text-sand-900 max-md3:text-xl"
    >
      {children}
    </h3>
  ),

  h4: ({ children, ...props }) => (
    <h4
      {...props}
      className="mt-7 mb-2 font-sans text-xl font-semibold leading-snug text-sand-900"
    >
      {children}
    </h4>
  ),

  h5: ({ children, ...props }) => (
    <h5
      {...props}
      className="mt-6 mb-2 font-sans text-lg font-semibold leading-snug text-sand-900"
    >
      {children}
    </h5>
  ),

  h6: ({ children, ...props }) => (
    <h6
      {...props}
      className="mt-5 mb-2 font-mono text-sm font-medium uppercase tracking-wide text-sand-600"
    >
      {children}
    </h6>
  ),

  p: ({ children, ...props }) => (
    <p
      {...props}
      className="mb-5 font-sans text-xl leading-[1.7] max-md3:text-lg max-xs3:text-base max-xs3:leading-[1.7] text-sand-800"
    >
      {children}
    </p>
  ),

  a: ({ children, ...props }) => (
    <a
      {...props}
      className="font-medium text-sand-700 underline decoration-sand-300 underline-offset-6 transition-colors hover:text-amber-700 hover:decoration-amber-700/50"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),

  ul: ({ children, ...props }) => (
    <ul
      {...props}
      className="my-4 list-disc space-y-2 pl-6 text-xl leading-[1.7] max-md3:text-lg max-xs3:text-base max-xs3:leading-[1.7] text-sand-800 marker:text-sand-400"
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol
      {...props}
      className="my-4 list-decimal space-y-2 pl-9.5 text-xl leading-[1.7] max-md3:text-lg max-xs3:text-base max-xs3:leading-[1.7] text-sand-800 marker:font-mono marker:text-sand-400"
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li
      {...props}
      className="pl-1"
    >
      {children}
    </li>
  ),

  strong: ({ children, ...props }) => (
    <strong
      {...props}
      className="font-sans font-semibold text-sand-900"
    >
      {children}
    </strong>
  ),

  em: ({ children, ...props }) => (
    <em
      {...props}
      className="font-sans italic text-sand-800"
    >
      {children}
    </em>
  ),

  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="my-8 rounded-r-sm border-l-2 border-amber-700/50 bg-amber-700/5 pt-1 pr-5 pb-1 pl-5 font-serif text-xl leading-[1.65] italic text-sand-700 max-md3:text-lg max-xs3:pl-4 max-xs3:text-base max-xs3:leading-[1.7] md:pl-6 [&_p]:mb-0"
    >
      {children}
    </blockquote>
  ),

  code: ({ children, ...props }) => (
    <code
      {...props}
      className="rounded-sm border border-sand-200 bg-sand-100 px-1.5 py-0.5 font-mono text-[0.88em] text-sand-900"
    >
      {children}
    </code>
  ),

  pre: (props) => (
    <Code
      {...props}
      className="min-w-0 max-w-full overflow-x-auto text-[1.0625rem]! max-md3:text-base! max-xs3:text-sm! mb-5! leading-relaxed"
    />
  ),

  hr: (props) => (
    <hr
      {...props}
      className="my-10 border-0 border-t border-sand-200"
    />
  ),

  img: ({ alt, ...props }) => (
    <Image
      {...props}
      alt={alt ?? ""}
      className="my-8 h-auto w-full rounded-sm border border-sand-200"
    />
  ),

  table: ({ children, ...props }) => (
    <div className="my-8 overflow-x-auto border-y border-sand-200">
      <table
        {...props}
        className="w-full min-w-150 border-collapse text-left text-base"
      >
        {children}
      </table>
    </div>
  ),

  th: ({ children, ...props }) => (
    <th
      {...props}
      className="border-b border-sand-200 px-4 py-3 font-mono text-xs font-medium uppercase tracking-wide text-sand-500"
    >
      {children}
    </th>
  ),

  td: ({ children, ...props }) => (
    <td
      {...props}
      className="border-b border-sand-100 px-4 py-3 leading-relaxed text-sand-800"
    >
      {children}
    </td>
  ),
  Video,
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="mdx-content">
      <MDXRemote
        source={source}
        components={components}
      />
    </div>
  );
}
