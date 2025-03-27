// Load certificates using AJAX + Promises
function fetchCertificates() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          "NPTEL Python for Data Science",
          "Coursera Data Visualization using Python",
          "Coursera Data Analysis using Python"
        ]);
      }, 1000); // Simulate API delay
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const certList = document.getElementById("certList");
  
    fetchCertificates().then(certificates => {
      certificates.forEach(cert => {
        const li = document.createElement("li");
        li.textContent = cert;
        certList.appendChild(li);
      });
    }).catch(err => {
      certList.innerHTML = "<li>Failed to load certificates.</li>";
    });
  });
  