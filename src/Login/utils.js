const baseUrl=process.env.REACT_APP_BASE_URL;
console.log({baseUrl});
 export const login = async ({ username, password }) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_URL + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
    }
  };
  
  