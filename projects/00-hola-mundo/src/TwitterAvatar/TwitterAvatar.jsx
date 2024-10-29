import './TwitterAvatar.css'

function TwiiterAvatar() {

  return (
    <article style={{display: 'flex', alignItems: 'center', color: '#fff'}}>
      <header>
        <img src="https://unavatar.io/midudev" alt="" />
        <div>
          <strong>
            Miguen Angel Duran
          </strong>
          <span>
            @midudev
          </span>
        </div>
      </header>
      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  )
}

export default TwiiterAvatar
