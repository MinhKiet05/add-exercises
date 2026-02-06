
export default function AsyncAwaitComponent() {

  const handleAsyncFetch = async () => {
    try {
      const response = await fetch('https://69853ee96964f10bf252acf9.mockapi.io/api/v1/students');
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Lỗi rồi:", error);
    }
  };

  return (
    <div>
      <button onClick={handleAsyncFetch}>Click to Load (Async)</button>
    </div>
  );
}