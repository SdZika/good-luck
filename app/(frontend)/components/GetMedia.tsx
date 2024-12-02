// app/media/page.tsx
import Image from 'next/image';

async function fetchMedia() {
    const response = await fetch(`http://localhost:3000/api/media`, {
        cache: 'no-store', // Disable caching to always fetch fresh data
    });

    if (!response.ok) {
        throw new Error('Failed to fetch media data');
    }

    const data = await response.json();
    return data;
}

export async function GetMedia() {
    const mediaData = await fetchMedia();

    return (
        <div>
            <h1>Teachers</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mediaData.docs.map((item) => (
                    <div key={item.id} className="media-item">
                        <Image
                            src={item.url}
                            alt={item.alt || 'Media file'}
                            width={item.width}
                            height={item.height}
                            className="rounded-lg shadow"
                        />
                        <p className="text-sm text-gray-500">{item.filename}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
