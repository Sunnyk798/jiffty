import "./Notification.css"

function Bar({item}) {
    return (
        <a className="noti-bars" href={item.url}>
            <span className="actor">{item.actor}</span>
            <span className="action"> {item.action}</span>
            <span className="time"> {item.createdAt}</span>
        </a>
    )
}

function Notification({user, noti}) {
    let item = {
        url:"/",
        actor:"Gunjan",
        action:"posted a new video.",
        createdAt:"1 day ago"
    }
  return (
    <div className={noti?"notification":"notification hide-noti"}>
        <h3>Notifications</h3>
        <div>
            <Bar item={item} />
            <Bar item={item} />
            <Bar item={item} />
            <Bar item={item} />
            <Bar item={item} />
        </div>
    </div>
  )
}

export default Notification;