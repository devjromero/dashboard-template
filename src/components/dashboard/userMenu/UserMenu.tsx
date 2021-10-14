import UserProfile from './../../../resources/assets/media/profile.jpeg';
export const UserMenu: React.FC<any> = props => {
    return (
            <img
                className   = {'w-10 bg-green-400 rounded-full object-cover shadow-xl'}
                src         = {UserProfile}
                alt         = {'UserProfile'}
            />
    );
};