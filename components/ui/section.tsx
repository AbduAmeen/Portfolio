import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section className={cn("py-20 px-4 sm:px-6 lg:px-8", className)} id={id}>
      {children}
    </section>
  );
};

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-4xl font-bold mb-12", className)}>{children}</h2>
  );
};

const SectionCategoryText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("text-blue-400 font-medium mb-4", className)}>
      {children}
    </div>
  );
};

const SectionSubtitleText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-gray-300 max-w-3xl mx-auto", className)}>
      {children}
    </p>
  );
};

const SectionContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", className)}>
      {children}
    </div>
  );
};

const SectionContentText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn("text-gray-300 mb-8", className)}>{children}</p>;
};

export {
  Section,
  SectionTitle,
  SectionCategoryText,
  SectionContent,
  SectionSubtitleText,
  SectionContentText,
};
