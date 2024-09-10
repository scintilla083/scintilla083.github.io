// Функция для получения данных профиля GitHub
function getGitHubProfile() {
    const githubUsername = "scintilla083"; // Ваш никнейм на GitHub
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

    fetch('certificates.txt')
        .then(response => response.text())
        .then(text => {
            const lines = text.trim().split('\n');
            let certificateList = `<h2>Certificates</h2><ul>`;
            lines.forEach(line => {
                const [name, link] = line.split(', ');
                certificateList += `<li><a href="${link}" target="_blank">${name}</a></li>`;
            });
            certificateList += `</ul>`;

            setTimeout(() => {
                content.innerHTML = certificateList;
                content.style.opacity = 1;
            }, 500);
        })
        .catch(error => {
            console.error('Ошибка при получении сертификатов:', error);
        });
}

function showHTB() {
    const content = document.getElementById('content');
    content.style.opacity = 0;

    fetch('htb_rooms.txt')
        .then(response => response.text())
        .then(text => {
            const lines = text.trim().split('\n');
            let htbList = `<h2>HTB Completed Rooms</h2><ul>`;
            lines.forEach(line => {
                const [name, difficulty, link] = line.split(', ');
                htbList += `<li>${name} - ${difficulty}: <a href="${link}" target="_blank">Link</a></li>`;
            });
            htbList += `</ul>`;

            setTimeout(() => {
                content.innerHTML = htbList;
                content.style.opacity = 1;
            }, 500);
        })
        .catch(error => {
            console.error('Ошибка при получении данных HTB:', error);
        });
}

// Вызов функции при загрузке страницы
window.onload = getGitHubProfile;
