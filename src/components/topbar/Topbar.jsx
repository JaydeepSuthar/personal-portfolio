import "./topbar.scss";

const Topbar = ({ isOpen, setIsOpen }) => {
	return (
		<>
			<div className={"topbar " + (isOpen && "active")}>
				<div className="wrapper">
					<div className="left">
						<a href="#intro" className="logo">
							Anime...
						</a>

						<div className="item-container">
							<i className="fa-solid fa-user"></i>
							<span>+91 9265016584</span>
						</div>
						<div className="item-container">
							<i className="fa-solid fa-envelope"></i>
							<span>sutharjaydeep20@gmail.com</span>
						</div>
					</div>
					<h1>Jaydeep Suthar</h1>
					<div className="right">
						<div
							onClick={() => setIsOpen((prev) => !prev)}
							className="hamburger"
						>
							<span className="line1"></span>
							<span className="line2"></span>
							<span className="line3"></span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Topbar;
