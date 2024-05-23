import clsx from "clsx";

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
  return (
    <pre
      className={clsx(
        plugins,
        lineHighlight && "line-highlight",
        `language-${language}`,
        className
      )}
      data-line={lineHighlight}
      tabIndex={-1}
    >
      {(Array.isArray(code) ? code : [code]).map((code, index) => {
        return (
          <Fragment key={index}>
            <code className={`language-${language}`} data-selected-index={index}>
              {code}
            </code>
            {`\n`}
          </Fragment>
        );
      })}
    </pre>
  );
};
