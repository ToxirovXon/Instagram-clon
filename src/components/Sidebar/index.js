import React from 'react';
import useUser from './../../hooks/useUser';
import Suggestions from './Suggestions';
import User from './User';

const Sidebar = () => {
    const { user: { docId, fullName, username, userId, following, avatarSrc } } = useUser();


    return (
        <div className="p-4 bg-white my-16 border-4 rounded-3">
            <User username={username} fullName={fullName} avatarSrc={avatarSrc}/>
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId}/>
        </div>
    );
};

export default Sidebar;
