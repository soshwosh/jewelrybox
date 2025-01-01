import { FC } from "react";

interface Props {
    pageTitle: string
}

const Header: FC<Props> = (
    {pageTitle}
) => {
    return (
        <div className="w-full p-10 bg-yellow-400 text-6xl text-white">
            {pageTitle}
        </div>
    );
};

export default Header;