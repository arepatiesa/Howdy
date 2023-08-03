import Link from "next/link"
import { auth } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Nav() {
    const [user, loading] = useAuthState(auth)
    console.log(user)
    return (
        <nav className="bg-gray-800 flex items-center justify-between py-5 px-10">
            <Link href="/" className="flex">
                <img className="w-12 cursos-pointer" src="/howdy.ico" />
                <button className="text-lg text-white text-2xl px-5 ">Howdy</button>
            </Link>
            <ul className="flex items-center gap-10">
                {!user && (
                <Link legacyBehavior href={"/auth/login"}>
                    <a className="py-2 px-4 text-sm bg-yellow-500 text-white rounded-lg font-medium ml-8">
                        Join Now
                    </a>
                </Link>
                )}
                {user && (
                    <div className="flex items-center gap-6">
                        <Link href="post">
                            <button className="font-medium rounded-lg bg-yellow-500 text-white py-2 px-4 rounded-mg textx-sm">
                                New Post
                            </button>
                        </Link>
                        <Link href="/dashboard">
                            <img className="w-12 rounded-full cursos-pointer" src={user.photoURL} />
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    )
}
