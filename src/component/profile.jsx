import {atom, useRecoilValue} from 'recoil';
import './profile.css'

const profileAtom = atom({
    key: "profileAtom",
    default: {
        followers: "80K",
        likes: "803K",
        photos: "1.4K",
        country: "Nepal",
        name: "Sushen",
        photoLink: "https://randomuser.me/api/portraits/men/75.jpg"
    }
})

export function Profile() {
    const profileDetails = useRecoilValue(profileAtom);

    return <div className='container'>
        <div className="upperContainer"></div>
        <div className='profilePicture' style={{
           backgroundImage: `url(${profileDetails.photoLink})`
        }}></div>
        <div className='lowerContainer'>
        <div className='name'>
            <p style={{
                fontSize: 20,
                fontWeight: 900
            }}>Sushen Oli</p>
            <p>Nepal</p>
        </div>
        
        </div>
        <hr />
        <div className='footer'>
            <div>
                <p style={{
                    fontWeight: 900
                }}>{profileDetails.followers}</p>
                <p >Followers</p>
            </div>
            <div>
                <p style={{
                    fontWeight: 900
                }}>{profileDetails.likes}</p>
                <p>Likes</p>
            </div>
            <div>
                <p style={{
                    fontWeight: 900
                }}>{profileDetails.photos}</p>
                <p>Photos</p>
            </div>
        </div>

    </div>
}

