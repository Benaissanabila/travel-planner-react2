

import React from 'react';
import styled from 'styled-components';

export interface UserProfileProps {

    name: string;
    email: string;
    avatarUrl: string;
    bio: string;

}

export function CurrentProfil({name, email, avatarUrl, bio }: UserProfileProps) {
    return (
        <ProfileContainer>
            <ProfileStyle>
                {avatarUrl && <Avatar src={avatarUrl} alt="Avatar" />}
                <p><strong>Name:</strong>{name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Bio:</strong> {bio}</p>
            </ProfileStyle>
        </ProfileContainer>
    );
}

const ProfileContainer = styled.div`
    margin-bottom: 20px;
`;

const ProfileStyle = styled.div`
    margin:20px;
    background: #81ecec;
    border: 2px solid #2980b9;
    padding: 16px;
    width: fit-content;
    min-width: 200px;
    position: relative;
    
`;



const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export default CurrentProfil;
