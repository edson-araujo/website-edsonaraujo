import { ClipboardDocumentCheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useToast } from "components/toast";
import { useCallback } from "react";
import { useCopyToClipboard } from "react-use";
import { useTranslations } from 'next-intl';

export const CopyButton = ({ content, className }: { className: string; content: string }) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const { toasts, addToast } = useToast();
  const t = useTranslations("Toast");

  const handleCopyCode = useCallback(() => {
    const messageTranslate = t("copyCode");
    copyToClipboard(content);
    addToast({
      id: "copy-code",
      message: messageTranslate,
      timestamp: Date.now(),
    });
  }, [t, addToast, content, copyToClipboard]);

  return (
    <button
      className={clsx(className, "h-5 w-5 transition-colors")}
      onClick={handleCopyCode}
      type="button"
    >
      <span className="sr-only">Copy code</span>
      {toasts.some((notification) => notification.id === "copy-code")
        ? <ClipboardDocumentCheckIcon className="h-5 w-5 text-sky-400" />
        : <ClipboardDocumentIcon className="h-5 w-5" />}
    </button>
  );
};
