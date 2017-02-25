import React from 'react';
import './style.css';

  // id: item.id,
  // name: item.name,
  // owner: item.owner.login,
  // description: item.description,
  // stargazers_count: item.stargazers_count,
  // forks_count: item.forks_count,
  // language: item.language,

export const ItemComponent = ({ item }) => {
  const {
    name,
    owner,
    forks_count,
    stargazers_count,
  } = item.toObject(['name', 'owner', 'forks_count', 'stargazers_count']);
  return (
    <li className="trd-i">
      <a
        className="trd-ia"
        href={`https://github.com/${owner}/${name}`}
        target="_blank"
      >
        {`${owner}/${name}`}
      </a>
      <div className="trd-ii">
         ⑃ {forks_count}
      </div>
      <div className="trd-ii trd-ii--last">
        ⭐️ {stargazers_count}
      </div>
    </li>
    );
}

export default ItemComponent;