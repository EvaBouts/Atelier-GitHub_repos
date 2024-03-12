import PropTypes from 'prop-types';

const Projet = ({ name, owner_avatar_url, owner_login, html_url, description }) => {
    // console.log(description)
    return (
        <>
            <a target="_blank" className="repo" href={html_url}>
                <img src={owner_avatar_url} alt="avatar" />
                <div className="repo-info">
                    <h2>{name}</h2>
                    <h3>{owner_login}</h3>
                    {description != null && description.length < 60 && <p>{description}</p>}
                    {description != null && description.length > 60 && <p>`${description.substring(0, 60)}...`</p>}
                </div>
            </a>
        </>
    )
};

Projet.propTypes = {
    name: PropTypes.string,
    owner_avatar_url: PropTypes.string,
    owner_login: PropTypes.string,
    owner_url: PropTypes.string,
    description: PropTypes.string,
}

export default Projet;