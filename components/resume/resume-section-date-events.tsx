import { FC } from "react";
import { useResumeSectionInView } from "components/resume/use-resume-section-in-view";
import { useTranslations } from "next-intl";

interface Responsibility {
  type: string[];
  content: string;
}

interface ResumeSectionDateEventsProps {
  name: string;
  organization: string;
  city: string;
  country: string;
  dateFrom: string;
  dateTo: string;
  showDateRange: boolean;
  description: string;
  responsibilities: Responsibility[];
  bullets?: boolean;
}

export const ResumeSectionDateEvents: FC<ResumeSectionDateEventsProps> = ({
  name,
  organization,
  city,
  country,
  dateFrom,
  dateTo,
  showDateRange,
  description,
  responsibilities,
  bullets = true,
}) => {
  const { filter } = useResumeSectionInView();
  const t = useTranslations("Resume");

  return (
    <main className="ml-0 spacing-1 print:!ml-12 md:ml-24 xl:ml-14 2xl:ml-12">
      <h3 className="items-baseline text-sm tracking-tight spacing-1">
        <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!text-[18px] print:!font-semibold">
          {t(name)}
        </strong>{" "}
        <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
          {t(organization) ? (
            <>
              <span className="font-semibold text-gray-600 d:text-gray-400">
                {t(organization)}
              </span>
              <span className="select-none text-sm text-gray-300 print:!text-gray-500">-</span>
            </>
          ) : null}
          <span className="text-gray-400/80 print:!text-gray-500">
            {t(city) && t(country) ? (
              <>
                <span className="hidden print:!inline sm:inline">{t(city)},</span> {t(country)}
              </>
            ) : (
              <>
                {t(city)}
                {t(country)}
              </>
            )}
          </span>
        </span>
        <div className="flex gap-2 whitespace-nowrap text-xs font-semibold text-gray-500 d:text-gray-400 print:!hidden md:hidden">
          {showDateRange ? (
            <>
              <span>
                {new Date(dateFrom)?.toLocaleDateString("pt-BR", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span>-</span>
              <span>
                {Date.now() > new Date(dateTo).getTime()
                  ? new Date(dateTo)?.toLocaleDateString("pt-BR", {
                      month: "short",
                      year: "numeric",
                    })
                  : "Atualmente"}
              </span>
            </>
          ) : (
            <span>
              {new Date(dateTo)?.toLocaleDateString("pt-BR", {
                year: "numeric",
              })}
            </span>
          )}
        </div>
      </h3>
      {description ? (
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      ) : null}
      {bullets ? (
        <ul className="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
          {responsibilities
            .filter(({ type }) => type.includes(filter) || filter === "sections.all")
            .map((responsibility, index) => (
              <li className="pl-3" key={index}>
                {t(responsibility.content)}
              </li>
            ))}
        </ul>
      ) : (
        <>
          {responsibilities
            .filter(({ type }) => type.includes(filter) || filter === "sections.all")
            .map((responsibility, index) => (
              <p
                className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base"
                key={index}
              >
                {t(responsibility.content)}
              </p>
            ))}
        </>
      )}
    </main>
  );
};
