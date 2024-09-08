// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Sample job data (replace with actual data fetched from backend)
    const jobs = [
        {
            title: "Frontend Developer",
            description: "We are looking for a skilled Frontend Developer...",
            company: "ABC Inc.",
            location: "New York, NY",
            salary: "80,000"
        },
        {
            title: "Backend Developer",
            description: "Join our team as a Backend Developer...",
            company: "XYZ Corp.",
            location: "San Francisco, CA",
            salary: "90,000"
        },
        // Add more job objects as needed
    ];

    const jobListings = document.getElementById("job-listings");

    // Function to create HTML for a job listing
    function createJobListing(job) {
        return `
            <article class="job-listing">
                <h2>${job.title}</h2>
                <p>${job.description}</p>
                <p>${job.company}, ${job.location}</p>
                <p>Salary: $${job.salary}</p>
            </article>
        `;
    }

    // Function to display job listings on the page
    function displayJobListings() {
        jobListings.innerHTML = ""; // Clear existing listings
        jobs.forEach(job => {
            jobListings.innerHTML += createJobListing(job);
        });
    }

    // Initial display of job listings
    displayJobListings();
});
