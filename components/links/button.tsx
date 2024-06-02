const Button = ({
  text,
  secondaryText,
  color = "#070707",
}: {
  text: string;
  secondaryText?: string;
  color?: string;
}) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-white rounded-lg max-w-fit bg-primary-400/80 hover:bg-primary-400 d:bg-primary-400/60 hover:d:bg-primary-400/80">
      <span>{text}</span>
      {secondaryText ? <span className="font-light text-neutral-200">{secondaryText}</span> : ""}
    </div>
  );
};

export default Button;
