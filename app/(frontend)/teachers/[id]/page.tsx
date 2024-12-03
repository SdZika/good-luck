async function fetchTeacherBySlug(id: string) {
          try {
            const response = await fetch(`http://localhost:3000/api/teachers?id=${id}`);
            
            if (!response.ok) throw new Error('Failed to fetch teacher');
            
            const data = await response.json(); // 

            console.log("response: ", data)
            return data.docs[0]; // Get the first teacher matching the slug

          } catch (error) {
            console.error(error);
            return null; 
          }
        }
        
        export default async function Teacher({ params }: { params: Promise<{ id: string }> }) {
         
          const resolvedParams = await params;
        
          
          const teacher = await fetchTeacherBySlug(resolvedParams.id);
        
          
          if (!teacher) {
            return (
              <main>
                <h3>Teacher not found</h3>
              </main>
            );
          }
        
          return (
            <main>
              <h3>Page: {teacher.someTextField}</h3>
              <div>BIO: {teacher.tabTwo.someOtherTextField}
                <p>Created at: {teacher.createdAt}</p>
                <p>Updated at: {teacher.updatedAt}</p>
               
              </div>
            </main>
          );
        }
        