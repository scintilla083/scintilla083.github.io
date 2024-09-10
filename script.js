// Функция для получения данных профиля GitHub
function getGitHubProfile() {
    const githubUsername = "scintilla083"; // Твой никнейм на GitHub
    const githubApiUrl = `https://api.github.com/users/${githubUsername}`;

    fetch(githubApiUrl)
        .then(response => response.json())
        .then(data => {
            // Обновляем аватар (лого) и никнейм
            document.getElementById('github-logo').src = data.avatar_url;
            document.getElementById('github-nickname').textContent = data.login;
        })
        .catch(error => {
            console.error('Ошибка при получении данных с GitHub:', error);
        });
}

// Функция для получения всех репозиториев с GitHub
function showGitHub() {
    const githubUsername = "scintilla083";
    const githubReposApiUrl = `https://api.github.com/users/${githubUsername}/repos`;

    const content = document.getElementById('content');
    content.style.opacity = 0;

    fetch(githubReposApiUrl)
        .then(response => response.json())
        .then(repos => {
            let repoList = `<h2>GitHub Repositories</h2><ul>`;
            repos.forEach(repo => {
                repoList += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description ? repo.description : 'No description'}</li>`;
            });
            repoList += `</ul>`;

            setTimeout(() => {
                content.innerHTML = repoList;
                content.style.opacity = 1;
            }, 500);
        })
        .catch(error => {
            console.error('Ошибка при получении репозиториев:', error);
        });
}

function showCertificates() {
    const content = document.getElementById('content');
    content.style.opacity = 0;
    setTimeout(() => {
        content.innerHTML = `
            <h2>Certificates</h2>
            <ul>
                <li>Certified Ethical Hacker (CEH)</li>
                <li>CompTIA Security+</li>
                <li>Google Cloud Certification</li>
            </ul>
        `;
        content.style.opacity = 1;
    }, 500);
}

function showHTB() {
    const content = document.getElementById('content');
    content.style.opacity = 0;
    setTimeout(() => {
        content.innerHTML = `
            <h2>HTB Completed Rooms</h2>
            <ul>
                <li>Room 1: <a href="https://www.hackthebox.com/room1" target="_blank">Link</a></li>
                <li>Room 2: <a href="https://www.hackthebox.com/room2" target="_blank">Link</a></li>
                <li>Room 3: <a href="https://www.hackthebox.com/room3" target="_blank">Link</a></li>
            </ul>
        `;
        content.style.opacity = 1;
    }, 500);
}

// Вызов функции при загрузке страницы
window.onload = getGitHubProfile;