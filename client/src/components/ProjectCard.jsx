export default function ProjectCard({ name, description, category, image }) {
  const categoryColors = {
    website: 'bg-[#F7D5DD] text-[#E192A7]',
    automation: 'bg-green-100 text-green-800',
    chatbot: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="card card-hover">
      <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 text-center px-4">Project Image Placeholder</span>
        )}
      </div>
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${categoryColors[category] || categoryColors.website}`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
