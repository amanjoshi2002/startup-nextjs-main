import Image from 'next/image';

const Project = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={projectUrl} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View Project</a>
      </div>
    </div>
  );
};

export default Project; 