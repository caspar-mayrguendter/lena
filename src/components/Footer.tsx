import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <div className='w-full border-t-2 border-rose-200 bg-cream/95'>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <ul className="flex justify-center gap-12 text-sm tracking-widest">
                    <li className='transition-colors text-dusty-rose/60'>
                        © Lena Marie 2025
                    </li>
                    <li>
                        <Link
                            to="/imprint"
                            className='transition-colors text-dusty-rose/60 hover:text-dusty-rose'
                        >
                            Impressum
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
