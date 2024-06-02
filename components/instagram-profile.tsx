import { Image } from "components/image";
import { Link } from "components/link";
import { useTranslations } from "next-intl";
import { FC } from "react";

interface TwitterProfileProps {
  profile_image_url: string;
  name: string;
  username: string;
  description: string;
  following_count: string;
  followers_count: string;
}

export const InstagramProfile: FC<TwitterProfileProps> = ({
  profile_image_url,
  name,
  username,
  description,
  following_count,
  followers_count,
}) => {
  const t = useTranslations("InstagramInfo");

  return (
    <section className="max-w-xs animate-float rounded-lg border-2 border-gray-400/30 bg-white/90 p-4 backdrop-blur-md will-change-transform spacing-2 d:bg-gray-800 lg:bg-white/80">
      <header className="flex gap-4">
        <div className="overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 p-0.5">
          <figure className="overflow-hidden rounded-full border-4 border-white/90 d:border-gray-800">
            <Image
              width={40}
              height={40}
              src={profile_image_url}
              alt={name}
              className="rounded-full"
            />
          </figure>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-wide">{name}</h2>
          <h3 className="text-sm tracking-tight text-gray-500 d:text-gray-300/90">
            @{username}
          </h3>
        </div>
        <Link
          target="_blank"
          href="https://www.instagram.com/eu_edsonaraujo/"
          className="butter-border my-auto ml-auto flex items-center justify-center rounded-full  bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 px-4 py-1.5 text-xs text-white transition-colors hfa:bg-sky-600/80 d:bg-sky-600/90 d:hfa:bg-sky-500/80"
        >
          {t("Follow")}
        </Link>
      </header>
      <main>
        <p className="line-clamp-3 pr-2 text-[13px] tracking-tight text-gray-500/90 d:text-gray-300/90">
          {t(description)}
        </p>
      </main>
      <footer>
        <p className="text-[13px] text-gray-500 d:text-gray-300/90">
          <span className="font-semibold text-gray-600 d:text-gray-200">
            {following_count}
          </span>{" "}
          {t("Following")}{" "}
          <span className="ml-2 font-semibold text-gray-600 d:text-gray-200">
            {followers_count}
          </span>{" "}
          {t("Followers")}
        </p>
      </footer>
    </section>
  );
};
