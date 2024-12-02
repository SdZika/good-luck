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
  
  export async function GetTeachers() {
    const teachersData = await fetchTeachers();
    console.log(teachersData)
  
    return (
      <main>
        {teachersData.docs.map((teach) => (
          <div key={teach.id}>
            <h3>{teach.someTextField}</h3>
          </div>
        ))}
      </main>
    );
  }
  