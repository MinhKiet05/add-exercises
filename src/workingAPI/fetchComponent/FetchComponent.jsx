export default function FetchComponent() {
    const handleFetch = () => {
        const apiUrl = 'https://69853ee96964f10bf252acf9.mockapi.io/api/v1/students';
        

        fetch(apiUrl)
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log("Data fetched via Fetch:", json);
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    return <>
        <button onClick={handleFetch}>Fetch Data</button>
    </>;
}