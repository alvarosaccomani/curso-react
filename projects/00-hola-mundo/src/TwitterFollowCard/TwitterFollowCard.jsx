import './TwitterFollowCard.css'

function TwiiterAvatar() {

  return (
    <article 
        className="tw-followCard"
        >
        <header 
                className="tw-followCard-header"
                >
                <img
                    className="tw-followCard-avatar" 
                    src="https://unavatar.io/midudev" alt="" 
                    />
                <div 
                    className="tw-followCard-info"
                    >
                    <strong
                        className="tw-followCard-infoUserName"
                        >
                        Miguen Angel Duran
                    </strong>
                    <span>
                        @midudev
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
