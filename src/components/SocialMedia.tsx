import {AiFillGithub, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai"
import {FaDiscord} from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className="absolute left-5  top-[20em]">
      <div className="flex flex-col bg-white border-2  px-5 py-2  gap-16">
        <AiFillLinkedin size={40}  />
        <AiFillTwitterSquare size={40}/>
        <AiFillGithub size={40}/>
        <FaDiscord size={40}/>
      </div>
    </div>
  )
}

export default SocialMedia
