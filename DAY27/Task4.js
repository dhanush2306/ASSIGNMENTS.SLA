async function fetchGitHubProfile(username) {
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
           
            throw new Error(`User not found! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("GitHub Profile Data:", data);

    } catch (error) {
        console.error("Error fetching GitHub profile:", error.message);
    }
}

fetchGitHubProfile("thisuserdoesnotexist12345");