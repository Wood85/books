interface BookCardProps {
  id: number;
  title: string;
  authors: string[];
  formats: {
    [mimeType: string]: string;
  };
  download_count: number;
  viewed?: boolean;
}

export default function BookCard({
  title,
  authors,
  formats,
  download_count,
  viewed = false,
}: BookCardProps) {
  return (
    <div 
      className={`bg-white shadow-md rounded-[10px] p-4 flex flex-col items-center transition-opacity ${
        viewed ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="max-w-[200px] aspect-[2/3] w-full rounded-[10px] overflow-hidden">
        <img src={formats["image/jpeg"]} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-600 mb-2 text-center">{authors.join(" / ")}</p>
      <p className="text-sm text-gray-500">Downloads: {download_count}</p>
    </div>
  );
}