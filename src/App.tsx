import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { Footer } from './components/Footer';
import { projects } from './data/projects';
import './index.css';

function App() {
    return (
        <div className="app">
            <Hero />

            <div id="projects">
                <CategorySection
                    id="ml"
                    title="Machine Learning"
                    subtitle="Kaggle Notebooks & ML Engineering Experiments"
                    gradientClass="gradient-blue"
                    icon={
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    }
                    projects={projects.ml}
                />

                <div className="divider"></div>

                <CategorySection
                    id="quant"
                    title="Quantitative Research"
                    subtitle="Applied Econophysics Papers & Mathematical Models"
                    gradientClass="gradient-purple"
                    icon={
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                    }
                    projects={projects.quant}
                />

                <div className="divider"></div>

                <CategorySection
                    id="swe"
                    title="Software Engineering + AI"
                    subtitle="Full-Stack AI Applications"
                    gradientClass="gradient-green"
                    icon={
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                    }
                    projects={projects.swe}
                />

                <div className="divider"></div>

                <CategorySection
                    id="phil"
                    title="Philosophy"
                    subtitle="Essays & Thought Pieces"
                    gradientClass="gradient-amber"
                    icon={
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    }
                    projects={projects.phil}
                />
            </div>

            <Footer />
        </div>
    );
}

export default App;
