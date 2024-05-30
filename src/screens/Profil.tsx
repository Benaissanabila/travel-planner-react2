import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { UserProfile } from '../models';
import { getCurrentUser } from "aws-amplify/auth";
import CurrentProfil from "./CurrentProfil";



const Profil= () => {
 const [userProfileData, setUserProfileData] = useState<UserProfile | null>(null);
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [avatarUrl, setAvatarUrl] = useState('');
 const [bio, setBio] = useState('');
 const [userId, setUserId] = useState<string | null>(null);

 useEffect(() => {
  getCurrentUser().then(({ userId }) => {
   fetchUserProfile(userId);
   setUserId(userId);
  })
 }, []);

 const fetchUserProfile = async (userId:string) => {
  try {

   const userProfileData = await DataStore.query(UserProfile, userProfile => userProfile.userId.eq(userId));
   console.log(userProfileData)
   if (userProfileData.length > 0) {
    setUserProfileData(userProfileData[0]);
    setName(userProfileData[0].name || '');
    setEmail(userProfileData[0].email || '');
    setAvatarUrl(userProfileData[0].avatarUrl || '');
    setBio(userProfileData[0].bio || '');
   }

  } catch (error) {
   console.error("Erreur lors de la récupération du profil :", error);
  }
 };
 const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();

  try {
   if (userProfileData) {
    // Si le profil existe déjà, mettez à jour le profil
    await DataStore.save(
        UserProfile.copyOf(userProfileData, updated => {
         updated.name = name;
         updated.email = email;
         updated.avatarUrl = avatarUrl;
         updated.bio = bio;
        })
    );
   } else {
    // Si le profil n'existe pas, créez un nouveau profil
    await DataStore.save(
        new UserProfile({
         userId: userId || '', // Utilisez l'ID utilisateur s'il est défini
         name,
         email,
         avatarUrl,
         bio
        })
    );
   }

   alert('Profil sauvegardé avec succès !');
  } catch (error) {
   console.error('Erreur lors de la sauvegarde du profil :', error);
   alert('Une erreur est survenue lors de la sauvegarde du profil.');
  }
 };

 const handleDelete = async () => {
  if (userProfileData) {
   try {
    await DataStore.delete(userProfileData);
    //onDelete();
    alert('Profil supprimé avec succès !');
   } catch (error) {
    console.error('Erreur lors de la suppression du profil :', error);
    alert('Une erreur est survenue lors de la suppression du profil.');
   }
  }
 };

 return (
     <div>
      <h2>{userProfileData ? 'Modifier le profil' : 'Créer un nouveau profil'}</h2>
      <form onSubmit={handleSubmit}>
       <label>
        Nom:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
       </label>
       <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       </label>
       <label>
        URL de l'avatar:
        <input type="text" value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} />
       </label>
       <label>
        Bio:
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
       </label>
       <button type="submit">{userProfileData ? 'Enregistrer les modifications' : 'Créer le profil'}</button>
      </form>
      {userProfileData && <button onClick={handleDelete}>Supprimer le profil</button>}
      <CurrentProfil name={name} email={email} avatarUrl={avatarUrl} bio={bio}></CurrentProfil>
     </div>
 );
};

export default Profil;



/*export interface UserProfile {
 id: string;
 userId: string;
 name?: string;
 email?: string;
 avatarUrl?: string;
 bio?: string;
 createdAt: string;
 updatedAt: string;
}



const Profil: React.FC<UserProfile> = ({
                                             id,
                                             userId,
                                             name,
                                             email,
                                             avatarUrl,
                                             bio,
                                             createdAt,
                                             updatedAt,
                                            }) => {
 return (
     <div className="user-profile">
      {avatarUrl && (
          <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar" />
      )}
      <div className="profile-info">
       <h2>{name || 'Unknown Name'}</h2>
       <p>User ID: {userId}</p>
       <p>Email: {email}</p>
       {bio && <p>Bio: {bio}</p>}
       <p>Created At: {createdAt}</p>
       <p>Updated At: {updatedAt}</p>
      </div>
     </div>
 );
};






export default Profil;*/