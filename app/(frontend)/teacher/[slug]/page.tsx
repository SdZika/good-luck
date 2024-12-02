interface PageProps {
  params: {
    slug: string;
  };
}



// Fetch data for the page
async function getData(slug: string) {
  const res = await fetch(`http://localhost:3000/api/teachers/${slug}`);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

// Dynamic page component
export default async function DynamicPage({ params }: PageProps) {
  const data = await getData(params.slug);
  console.log(data)

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

// Predefine static parameters
export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/teachers');
  if (!res.ok) throw new Error('Failed to fetch params');
  const posts = await res.json();

  console.log(posts)

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
