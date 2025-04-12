export const fetchRestorans = async () => {
    try {
      const response = await fetch("https://restvk/mini-rest.ru", {
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