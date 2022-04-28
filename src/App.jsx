import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
	return (
		<>
			{/* Top */}
			<Topbar />
			{/* Section - Intro :: Portfolio :: Work */}
			<div className="sections">
				<Intro />
				<Portfolio />
				<Works />
				<Testimonials />
				<Contact />
			</div>
		</>
	);
}

export default App;
