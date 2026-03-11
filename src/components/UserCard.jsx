import React from 'react'

function UserCard({ userfeed }) {
    return (
        <div><div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{userfeed[0].firstName + " " + userfeed[0].lastName}</h2>
                <p>{userfeed[0].about}</p>
                <div className="card-actions">
                    <button className="btn btn-error">Ignore</button>
                    <button className="btn btn-success">Interested</button>

                </div>
            </div>
        </div></div>
    )
}

export default UserCard