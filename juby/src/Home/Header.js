import React from 'react';

const Header = () => {
  return (
    <div>
      <div class="header">
		
		<nav class="navbar navbar-default">
			<div class="container">

				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a  href="index.html"><h1>Juby <img src="images/c1.jpeg" alt=" " /> Drone</h1></a>
				</div>

				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav navbar-right">
						<li class="hover-effect"><a href="index.html">Home</a></li>
						<li class="hover-effect"><a href="about.html">About</a></li>
						<li class="hover-effect"><a href="games.html">Games</a></li>
						<li class="hover-effect"><a href="news.html">News</a></li>
						<li class="hover-effect"><a href="contact.html">Contact</a></li>
					</ul>
				</div>

			</div>
		</nav>
		</div>
    </div>
  );
}

export default Header;

