import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { Footer } from './components/Footer';
import { projects } from './data/projects';
import './index.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />

            <div id="projects">
                <CategorySection
                    id="ml"
                    title="Machine Learning"
                    subtitle="Kaggle Notebooks & ML Engineering Experiments"
                    projects={projects.ml}
                />

                <CategorySection
                    id="quant"
                    title="Quantitative Research"
                    subtitle="Applied Econophysics Papers & Mathematical Models"
                    projects={projects.quant}
                />

                <CategorySection
                    id="swe"
                    title="Software Engineering + AI"
                    subtitle="Full-Stack AI Applications"
                    projects={projects.swe}
                />

                <CategorySection
                    id="phil"
                    title="Philosophy"
                    subtitle="Essays & Thought Pieces"
                    projects={projects.phil}
                />
            </div>

            <Footer />
        </div>
    );
}

export default App;
