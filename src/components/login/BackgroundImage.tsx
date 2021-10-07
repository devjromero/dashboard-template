import {FC} from "react";
import BackgroundImg from './../../resources/assets/media/background2.svg';
const BackgroundImage:FC<any> = () => {
    return (
        <div className={'hidden z-1 bg-cover h-full w-2/3 lg:flex'}>
            <img
                className={'w-full h-full'}
                src={BackgroundImg}
                alt="New Generation"
            />
        </div>
    );
}
export default BackgroundImage;