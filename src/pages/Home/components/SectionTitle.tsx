interface ISectionTitleProps {
  text: string;
}

export const SectionTitle = ({ text }: ISectionTitleProps) => {
  return (
    <h1 className="text-ex-red flex items-center gap-4">
      <div className="h-10 w-5 rounded-md bg-ex-red"></div>
      <p className="font-semibold text-base">{text}</p>
    </h1>
  );
};
