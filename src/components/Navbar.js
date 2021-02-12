import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

import { graphql, useStaticQuery } from 'gatsby';

const MenuLinksQuery = graphql`
	query MenuLinksQuery {
		site {
			siteMetadata {
				menuLinks {
					name
					link
					subMenu {
						link
						name
					}
				}
			}
		}
	}
`;

const NavBar = () => {
	// NAV LINK DATA
	const data = useStaticQuery(MenuLinksQuery);

	// console.log('>> TEST_MENU_LINKS_QUERY_DATA:', data);

	// COMPONENT STATE
	const [active, setActive] = useState(false);
	const [navBarActiveClass, setNavBarActiveClass] = useState('');

	const toggleHamburger = () => {
		console.log('TEST TOGGLE HAM', active);
		// // toggle the active boolean in the state
		setActive(!active);
	};

	useEffect(() => {
		active ? setNavBarActiveClass('is-active') : setNavBarActiveClass('');
	});

	// COMPONENT RENDER
	return (
		<nav
			className="navbar is-transparent"
			role="navigation"
			aria-label="main-navigation"
		>
			<div className="container">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item" title="Logo">
						<img src={logo} alt="Kaldi" style={{ width: '88px' }} />
					</Link>
					{/* Hamburger menu */}
					<div
						className={`navbar-burger burger ${navBarActiveClass}`}
						data-target="navMenu"
						onClick={toggleHamburger}
					>
						<span />
						<span />
						<span />
					</div>
				</div>
				<div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
					<div className="navbar-start has-text-centered">
						<Link className="navbar-item" to="/about">
							About Us
						</Link>
						<Link className="navbar-item" to="/products">
							Career Catalysts
						</Link>
						<Link className="navbar-item" to="/blog">
							COVID-19 Impact
						</Link>
					</div>
					<div className="navbar-end has-text-centered">
						<a
							className="navbar-item"
							href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="icon">
								<img src={github} alt="Github" />
							</span>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
