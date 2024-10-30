import './TwitterFollowCard.css'

function TwiiterAvatar({ formatUserName, userName, name, isFollowing }) {

    const imageSrc = `https://unavatar.io/${userName}`

    return (
        <article 
            className="tw-followCard"
            >
            <header 
                    className="tw-followCard-header"
                    >
                    <img
                        className="tw-followCard-avatar" 
                        src={imageSrc} alt="" 
                        />
                    <div 
                        className="tw-followCard-info"
                        >
                        <strong
                            className="tw-followCard-infoUserName"
                            >
                            {name}
                        </strong>
                        <span>
                            {formatUserName(userName)}
                        </span>
                    </div>
            </header>
            <aside>
                    <button className="tw-followCard-info-button">
                        Seguir
                    </button>
            </aside>
        </article>
    )
}

export default TwiiterAvatar
