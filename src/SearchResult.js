import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
const SearchResult = ({ img, location, title, desc, price, star, total }) => {
	return (
		<div className="searchResult">
			<img src={img} alt="airbnb" />
			<FavoriteBorderIcon className="searchResult__heart" />
			<div className="searchResult__info">
				<div className="searchResult__infotop">
					<p>{location}</p>
					<h3>{title}</h3>
					<p>____</p>
					<p>{desc}</p>
				</div>
				<div className="searchResult__infobottom">
					<div className="searchResult__stars">
						<StarIcon className="searchResult__star" />
						<p>
							<strong>{star}</strong>
						</p>
					</div>
				</div>

				<div className="searchResults__price">
					<h2>{price}</h2>
					<p>{total}</p>
				</div>
			</div>
		</div>
	);
};

export default SearchResult;