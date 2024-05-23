import { FC } from "react";

type WelcomeProps = {
  uses:
  | "exploring new technologies"
  | "showcasing my skills"
  | "finding freelance opportunities"
  | "finding a full-time job";
};

export const Welcome: FC<WelcomeProps> = ({ uses }) => {
  return (
    <>
      <h1>This is my little corner of the internet.</h1>
      <p>
        I use this site for <em>{uses}</em>.
      </p>
    </>
  );
};

export default Welcome;
