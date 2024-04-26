import { Link } from "react-router-dom";
import GithubSVG from "../../../assets/icons/github.svg"

const About = () => {
    return (
        <>
            <div>
            <h2 className="text-[1.3em] opacity-70 font-semibold text-white">About IDOLCS</h2>
            <div className="bg-[#F3F1F2] px-4 py-6 mt-4 rounded-md">
                <p>The IDOLCS website is developed and maintained by <Link className="underline underline-offset-1" href="">The IDOLCS community</Link>. Developed with an intention to be a platform for IDOL (CDOE) students to download and share notes, resources and other study material. </p>
                <img className="w-8 mt-4" src={GithubSVG} alt="" />
            </div>
            </div>
        </>
    )
}

export default About;