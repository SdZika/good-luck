import Link from "next/link";

// Fetch teachers from the API
async function fetchTeachers() {
  try {
    const response = await fetch('http://localhost:3000/api/teachers');
    if (!response.ok) {
      throw new Error('Failed to fetch teachers');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching teachers:', error);
    return { docs: [] }; // Return an empty array if fetching fails
  }
}

// Component to display a list of teachers
export async function GetTeachers() {
  const teachersData = await fetchTeachers();

  if (teachersData.docs.length === 0) {
    return (
      <main>
        <h3>No teachers found</h3>
      </main>
    );
  }

  return (
    <main>
      {teachersData.docs.map((teacher) => (
        <div key={teacher.id}>
          <Link href={`/teachers/${teacher.id}`}>
            <h3>{teacher.someTextField}</h3>
          </Link>
        </div>
      ))}
    </main>
  );
}
