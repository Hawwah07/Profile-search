

function PeopleProfile ({id, title, firstName, lastName, picture}) {
     return (
        <div className="card">
            <img src={picture} alt="My profile" className="image" />
            <div className="card-words">
                <p>{id}</p>
                <p>{title} {firstName} {lastName}</p>
            </div>
        </div>
     )
 
}

export default PeopleProfile;