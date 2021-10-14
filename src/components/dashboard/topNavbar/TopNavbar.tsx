import CommonPropsType from "../CommonProps.type";
import {AiOutlineShoppingCart, GiHamburgerMenu} from "react-icons/all";
import {UserMenu} from "../userMenu/UserMenu";

export const TopNavbar: React.FC<CommonPropsType> = props => {
    return (
        <div className={'w-full p-4 sticky top-0'}>
            <div className={'flex items-center bg-white rounded h-12 p-2 shadow-xl'}>
                <div className={'lg:hidden'}>
                    <GiHamburgerMenu
                        onClick     = {(e:any)=>props.setIsOpenLeftNavbar(!props.isOpenLeftNavbar)}
                        className   = {'cursor-pointer'}
                    />
                </div>
                <div className={'flex flex-1 flex-row-reverse gap-2 bg-yellow-400'}>
                    <Item>
                        <UserMenu/>
                    </Item>
                    <div className={'bg-red-100'}>
                        <div className={'h-full w-auto flex items-center'}>
                            <AiOutlineShoppingCart
                                size={20}
                                className={'cursor-pointer bg-red-400 block'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Item:React.FC<any> = (props) => {
    return (
        <div className={'h-full w-auto flex items-center bg-blue-200'}>
            {props.children}
        </div>
    );
}