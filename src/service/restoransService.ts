export const fetchRestorans = async () => {
    try {
      const response = await fetch("http://localhost:3001/mini-rest", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("fetchRestorans Error");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };