import { SiSololearn } from "react-icons/si";
import { SiExpertsexchange } from "react-icons/si";
import { PiFediverseLogoDuotone } from "react-icons/pi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const featuresData = [
    {
        title: "Easy Course Enrollment",
        description: "Browse and enroll in any course with just one click — no hassle, no confusion.",
        icon: <SiSololearn />,
    },
    {
        title: "Expert Instructors",
        description: "Learn from experienced professionals and subject matter experts.",
        icon: <SiExpertsexchange />,
    },
    {
        title: "Diverse Course Catalog",
        description: "Explore a wide range of courses - from C, C++, and DSA to Full Stack Development.",
        icon: <PiFediverseLogoDuotone />,
    },
    {
        title: "Responsive & Mobile-Friendly",
        description: "Access your learning on any device, anytime, anywhere.",
        icon: <MdOutlineMobileFriendly />,
    },
    {
        title: "Secure Authentication",
        description: "Your data is safe with us - secure sign-up and JWT-based login system.",
        icon: <GrSecure />,
    },
    {
        title: "Lifetime Access",
        description: "Once enrolled, your course materials are always accessible.",
        icon: <AiOutlineSafetyCertificate />,
    }
]

export default featuresData;