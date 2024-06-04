import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown({name}){
    return (
        <>
        
        <div className="dropdown dropdown-hover ">
            <div tabIndex={0} role="button" className="btn bg-transparent  border-0 shadow-none text-base lg:font-xs xl:font-semibold hover:font-bold text-black ">{name} <ChevronDownIcon className="-mr-1 h-5 w-5 " aria-hidden="true" />
            </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
            <li><a>Integration</a></li>
            <li><a>Item 2</a></li>
        </ul>
        </div>
        </>
    )
}