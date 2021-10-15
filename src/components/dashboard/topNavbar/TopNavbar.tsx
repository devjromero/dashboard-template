import CommonPropsType from "../CommonProps.type";
import {AiOutlineShoppingCart, GiHamburgerMenu} from "react-icons/all";
import {UserMenu} from "../userMenu/UserMenu";
import {LanguageSwitcherV2} from "../../languageSwitcher/LanguageSwitcherV2";
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
                <div className={'flex flex-1 flex-row-reverse gap-2'}>
                    <Item>
                        <UserMenu/>
                    </Item>
                    <Item>
                        <AiOutlineShoppingCart
                            size={20}
                            className={'cursor-pointer block'}
                        />
                    </Item>
                    <Item>
                        <LanguageSwitcherV2/>
                    </Item>
                </div>
            </div>
        </div>
    );
};

const Item:React.FC<any> = (props) => {
    return (
        <div className={''}>
            <div className={'h-full w-auto flex items-center'}>
                {props.children}
            </div>
        </div>
    );
}