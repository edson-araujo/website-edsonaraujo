import { isExternalUrl } from "@/utils/is-external-url";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, FC, useCallback, MouseEvent } from "react";

export type LinkProps = AnchorHTMLAttributes<any> & NextLinkProps;

export const Link: FC<LinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  legacyBehavior,
  onClick,
  ...AnchorProps
}) => {
  const nextLinkProps = {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    legacyBehavior,
  };

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (window.self !== window.top && href) {
        e.preventDefault();
        e.stopPropagation();

        window?.parent?.postMessage(
          {
            source: "theme-content",
            topic: "redirect",
            href: href,
          },
          "*"
        );
      }
      if (onClick) {
        onClick(e);
      }
    },
    [href, onClick]
  );

  if (href && !isExternalUrl(href)) {
    return (
      <NextLink
        {...nextLinkProps}
        href={
          typeof href === "string" ? href.replace(/^\/products\//gi, "/") : href
        }
        onClick={handleClick}
        {...AnchorProps}
      >
        {children}
      </NextLink>
    );
  } else if (href) {
    return (
      <a
        href={
          typeof href === "string" ? href.replace(/^\/products\//gi, "/") : href
        }
        rel={
          AnchorProps?.target === "_blank" ? "noopener noreferrer" : undefined
        }
        onClick={onClick}
        {...AnchorProps}
      >
        {children}
      </a>
    );
  } else {
    return (
      <span onClick={onClick} {...AnchorProps}>
        {children}
      </span>
    );
  }
};
