import { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/spotify-embed");

        if (response.ok) {
          const data = await response.json();
          // Do something with the data from your API
          console.log(data);
        } else {
          console.error("Failed to fetch data from API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  return <div>{/* Your component content */}</div>;
};

export default MyComponent;
