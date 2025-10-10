// State tracking
const state = {
    ml: { showAll: false, shuffled: [] },
    quant: { showAll: false, shuffled: [] },
    swe: { showAll: false, shuffled: [] },
    phil: { showAll: false, shuffled: [] }
};

// Fisher-Yates shuffle
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Create project card HTML
function createProjectCard(project) {
    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    return `
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-card">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <svg class="external-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">${tagsHTML}</div>
        </a>
    `;
}

// Render projects for a category
function renderProjects(category, showAll = false) {
    const grid = document.getElementById(`${category}-grid`);
    const projectList = showAll ? projects[category] : state[category].shuffled;

    grid.innerHTML = projectList.map(project => createProjectCard(project)).join('');
}

// Toggle between showing 6 and all projects
function toggleProjects(category) {
    state[category].showAll = !state[category].showAll;
    const chevron = document.getElementById(`${category}-chevron`);
    const btnText = document.getElementById(`${category}-btn-text`);
    const totalCount = projects[category].length;

    if (state[category].showAll) {
        renderProjects(category, true);
        chevron.classList.add('rotated');
        btnText.textContent = 'Show Less';
    } else {
        renderProjects(category, false);
        chevron.classList.remove('rotated');
        btnText.textContent = `See All ${totalCount} Projects`;
    }
}

// Initialize on page load
function init() {
    // Shuffle and store 6 random projects for each category
    state.ml.shuffled = shuffleArray(projects.ml).slice(0, 6);
    state.quant.shuffled = shuffleArray(projects.quant).slice(0, 6);
    state.swe.shuffled = shuffleArray(projects.swe).slice(0, 6);
    state.phil.shuffled = shuffleArray(projects.phil).slice(0, 6);

    // Set
    document.getElementById('ml-count').textContent = `${projects.ml.length} Projects`
    document.getElementById('quant-count').textContent = `${projects.quant.length} Projects`
    document.getElementById('swe-count').textContent = `${projects.swe.length} Projects`
    document.getElementById('phil-count').textContent = `${projects.phil.length} Projects`

    // Set initial button text with project counts
    document.getElementById('ml-btn-text').textContent = `See All ${projects.ml.length} Projects`;
    document.getElementById('quant-btn-text').textContent = `See All ${projects.quant.length} Projects`;
    document.getElementById('swe-btn-text').textContent = `See All ${projects.swe.length} Projects`;
    document.getElementById('phil-btn-text').textContent = `See All ${projects.phil.length} Projects`;

    // Render initial 6 projects for each category
    renderProjects('ml');
    renderProjects('quant');
    renderProjects('swe');
    renderProjects('phil');
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
