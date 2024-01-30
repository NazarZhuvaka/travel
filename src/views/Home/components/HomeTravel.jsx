import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HomeTravel = () => {
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<div className="home-travel">
			<motion.ul
				className="home-travel__list"
				variants={container}
				initial="hidden"
				animate="visible"
			>
				<motion.li variants={item} className="home-travel-item">
					<Link to="/travel">
						<img src="/travel.png" alt="travel" />
						<img className="home-travel-item__heart" src="./heart-icon.svg" alt="" />
						<div className="home-travel-item__info">
							<p className="home-travel-item__info__title"><span className="active">Mount Fuji,</span>Tokyo</p>
							<div className="home-travel-item__container">
								<div className="home-travel-item__location">
									<img src="/location.svg" alt="loc" />
									<p className="home-travel-item__location__text">
										Tokyo, Japan
									</p>
								</div>
								<div className="home-travel-item__stars">
									<img src="/star.svg" alt="" />
									<p className="home-travel-item__stars__text">4.8</p>
								</div>
							</div>
						</div>
					</Link>
				</motion.li>
				<motion.li variants={item} className="home-travel-item">
					<Link to="/travel">
						<img src="/home.png" alt="travel" />
						<img className="home-travel-item__heart" src="./heart-icon.svg" alt="" />
						<div className="home-travel-item__info">
							<p className="home-travel-item__info__title"><span className="active">Andes,</span>South</p>
							<div className="home-travel-item__container">
								<div className="home-travel-item__location">
									<img src="/location.svg" alt="loc" />
									<p className="home-travel-item__location__text">
									South, America
									</p>
								</div>
								<div className="home-travel-item__stars">
									<img src="/star.svg" alt="" />
									<p className="home-travel-item__stars__text">4.5</p>
								</div>
							</div>
						</div>
					</Link>
				</motion.li>
				<motion.li variants={item} className="home-travel-item">
					<Link to="/travel">
						<img src="/travel.png" alt="travel" />
						<img className="home-travel-item__heart" src="./heart-icon.svg" alt="" />
						<div className="home-travel-item__info">
							<p className="home-travel-item__info__title"><span className="active">Mount Fuji,</span>Tokyo</p>
							<div className="home-travel-item__container">
								<div className="home-travel-item__location">
									<img src="/location.svg" alt="loc" />
									<p className="home-travel-item__location__text">
										Tokyo, Japan
									</p>
								</div>
								<div className="home-travel-item__stars">
									<img src="/star.svg" alt="" />
									<p className="home-travel-item__stars__text">4.8</p>
								</div>
							</div>
						</div>
					</Link>
				</motion.li>
				<motion.li variants={item} className="home-travel-item">
					<Link to="/travel">
						<img src="/travel.png" alt="travel" />
						<img className="home-travel-item__heart" src="./heart-icon.svg" alt="" />
						<div className="home-travel-item__info">
							<p className="home-travel-item__info__title"><span className="active">Mount Fuji,</span>Tokyo</p>
							<div className="home-travel-item__container">
								<div className="home-travel-item__location">
									<img src="/location.svg" alt="loc" />
									<p className="home-travel-item__location__text">
										Tokyo, Japan
									</p>
								</div>
								<div className="home-travel-item__stars">
									<img src="/star.svg" alt="" />
									<p className="home-travel-item__stars__text">4.8</p>
								</div>
							</div>
						</div>
					</Link>
				</motion.li>
				<motion.li variants={item} className="home-travel-item">
					<Link to="/travel">
						<img src="/travel.png" alt="travel" />
						<img className="home-travel-item__heart" src="./heart-icon.svg" alt="" />
						<div className="home-travel-item__info">
							<p className="home-travel-item__info__title"><span className="active">Mount Fuji,</span>Tokyo</p>
							<div className="home-travel-item__container">
								<div className="home-travel-item__location">
									<img src="/location.svg" alt="loc" />
									<p className="home-travel-item__location__text">
										Tokyo, Japan
									</p>
								</div>
								<div className="home-travel-item__stars">
									<img src="/star.svg" alt="" />
									<p className="home-travel-item__stars__text">4.8</p>
								</div>
							</div>
						</div>
					</Link>
				</motion.li>
				<motion.li variants={item} className="home-travel-item">
					<Link to="/travel">
						<img src="/travel.png" alt="travel" />
						<img className="home-travel-item__heart" src="./heart-icon.svg" alt="" />
						<div className="home-travel-item__info">
							<p className="home-travel-item__info__title"><span className="active">Mount Fuji,</span>Tokyo</p>
							<div className="home-travel-item__container">
								<div className="home-travel-item__location">
									<img src="/location.svg" alt="loc" />
									<p className="home-travel-item__location__text">
										Tokyo, Japan
									</p>
								</div>
								<div className="home-travel-item__stars">
									<img src="/star.svg" alt="" />
									<p className="home-travel-item__stars__text">4.8</p>
								</div>
							</div>
						</div>
					</Link>
				</motion.li>
			</motion.ul>
		</div>
	);
};
