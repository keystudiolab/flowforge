type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-8 border border-zinc-800 hover:border-blue-500 transition duration-300 hover:-translate-y-2">

      <div className="text-blue-500 mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-zinc-400">
        {description}
      </p>

    </div>
  );
}