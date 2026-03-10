export default function ServiceCard({ icon, title, description, cta }) {
  return (
    <div className="card card-hover flex flex-col h-full">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <button className="btn-primary text-sm mt-auto">{cta}</button>
    </div>
  );
}
