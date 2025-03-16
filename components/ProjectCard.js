'use client'

export default function ProjectCard({ title, description, icon, tags, gradientFrom, gradientTo }) {
    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:shadow-xl hover:-translate-y-1 border border-gray-700">
            <div className={`h-48 bg-gradient-to-r ${gradientFrom} ${gradientTo} flex items-center justify-center`}>
                {icon}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-700/50 hover:bg-gray-800/70 transition-colors duration-200 ease-in-out backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
} 