export const fetchRestorans = async () => {
    try {
      const response = await fetch("LINK", {
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