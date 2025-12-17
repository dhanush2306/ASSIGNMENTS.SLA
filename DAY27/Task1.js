async function getGitHubProfile() {
    const username = "<your-username>"; 
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("GitHub Profile Data:", data);
    } catch (error) {
        console.error("Error fetching GitHub profile:", error);
    }
}


getGitHubProfile();