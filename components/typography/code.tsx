import clsx from "clsx";
import { highlightAll } from "prismjs";
import { FC, Fragment, useCallback, useEffect } from "react";

export type CodeGroupProps = {
  code: string | string[];
  language:
    | "js"
    | "css"
    | "json"
    | "jsx"
    | "typescript"
    | "tsx"
    | "yml"
    | "Rust"
    | "bash"
    | "html"
    | "javascript";
  className?: string;
  lineHighlight?: string;
  plugins?: ("line-numbers" | "highlight-keywords")[];
};

export const Code: FC<CodeGroupProps> = ({ language, plugins, lineHighlight, code, className }) => {
  const loadDependencies = useCallback(async () => {
    if (language === "tsx") {
      await import(`prismjs/components/prism-jsx`);
      await import(`prismjs/components/prism-typescript`);
    }
    if (language === "html") {
      await import(`prismjs/components/prism-markup`);
    }
    if (language !== "html") {
      await import(`prismjs/components/prism-${language}`);
    }
    if (plugins?.includes("line-numbers")) {
      await import("prismjs/plugins/line-numbers/prism-line-numbers.js");
    }
    if (plugins?.includes("highlight-keywords")) {
      await import("prismjs/plugins/highlight-keywords/prism-highlight-keywords.js");
    }
    if (lineHighlight) {
      await import("prismjs/plugins/line-highlight/prism-line-highlight.js");
    }

    highlightAll();
  }, [language, lineHighlight, plugins]);

  useEffect(() => {
    loadDependencies();
  }, [loadDependencies]);

  return (
    <pre
      className={clsx(
        `language-${language}`,
        className,
        plugins?.map(plugin => plugin),
        lineHighlight && "line-highlight"
      )}
      data-line={lineHighlight}
      tabIndex={-1}
    >
      {(Array.isArray(code) ? code : [code]).map((codeBlock, index) => (
        <Fragment key={index}>
          <code className={`language-${language}`} data-selected-index={index}>
            {codeBlock}
          </code>
          {`\n`}
        </Fragment>
      ))}
    </pre>
  );
};
