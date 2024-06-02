import { StarIcon } from "@heroicons/react/20/solid";
import { BookOpenIcon, BuildingOffice2Icon, CakeIcon, ChartBarIcon, CodeBracketIcon, CodeBracketSquareIcon, ComputerDesktopIcon, FireIcon, LanguageIcon, SignalIcon, UserCircleIcon, WifiIcon } from "@heroicons/react/24/solid";
import { FaBaby, FaGamepad } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { IoGameController, IoShareSocial, IoAirplaneSharp, IoPhonePortrait, IoSchool, IoLogoReact, IoLogoLaravel } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import { IoLogoGameControllerA, IoIosBusiness } from "react-icons/io";
import { FaComputerMouse, FaVirusCovid, FaJava } from "react-icons/fa6";
import { RiCellphoneFill, RiEnglishInput, RiVirusLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { MdEngineering, MdDeveloperMode, MdSick, MdNaturePeople } from "react-icons/md";
import { BiSolidSchool, BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { ImSad2 } from "react-icons/im";
import { BsFillHousesFill } from "react-icons/bs";

export const TIMELINEOBJECT = {
  "2002": [
    {
      date: "2002-28-02",
      heading: "About.timeline.2002.birth.heading",
      description: "About.timeline.2002.birth.description",
      Icon: ({ className = "" }) => <FaBaby className={className} />,
    },
  ],
  "2007": [
    {
      date: "2007-01-01",
      heading: "About.timeline.2007.games.heading",
      description: "About.timeline.2007.games.description",
      Icon: ({ className = "" }) => <IoLogoGameControllerA className={className} />,
    },
    {
      date: "2007-02-01",
      heading: "About.timeline.2007.school.heading",
      description: "About.timeline.2007.school.description",
      Icon: ({ className = "" }) => <GiSchoolBag className={className} />,
    },
  ],
  "2009": [
    {
      date: "2009-01-01",
      heading: "About.timeline.2009.newGames.heading",
      description: "About.timeline.2009.newGames.description",
      Icon: ({ className = "" }) => <IoGameController className={className} />,
    },
  ],
  "2010": [
    {
      date: "2010-01-01",
      heading: "About.timeline.2010.firstComputerContact.heading",
      description: "About.timeline.2010.firstComputerContact.description",
      Icon: ({ className = "" }) => <ComputerDesktopIcon className={className} />,
    },
  ],
  "2011": [
    {
      date: "2011-05-01",
      heading: "About.timeline.2011.computerGames.heading",
      description: "About.timeline.2011.computerGames.description",
      Icon: ({ className = "" }) => <FaComputerMouse className={className} />,
    },
  ],
  "2012": [
    {
      date: "2012-04-01",
      heading: "About.timeline.2012.socialMedia.heading",
      description: "About.timeline.2012.socialMedia.description",
      Icon: ({ className = "" }) => <IoShareSocial className={className} />,
    },
    {
      date: "2012-06-01",
      heading: "About.timeline.2012.firstFlight.heading",
      description: "About.timeline.2012.firstFlight.description",
      Icon: ({ className = "" }) => <IoAirplaneSharp className={className} />,
    },
    {
      date: "2012-02-28",
      heading: "About.timeline.2012.firstPhone.heading",
      description: "About.timeline.2012.firstPhone.description",
      Icon: ({ className = "" }) => <RiCellphoneFill className={className} />,
    },
  ],
  "2014": [
    {
      date: "2014-02-28",
      heading: "About.timeline.2014.firstTouchPhone.heading",
      description: "About.timeline.2014.firstTouchPhone.description",
      Icon: ({ className = "" }) => <IoPhonePortrait className={className} />,
    },
    {
      date: "2014-06-01",
      heading: "About.timeline.2014.secondCearaTrip.heading",
      description: "About.timeline.2014.secondCearaTrip.description",
      Icon: ({ className = "" }) => <IoAirplaneSharp className={className} />,
    },
  ],
  "2016": [
    {
      date: "2016-12-01",
      heading: "About.timeline.2016.middleSchoolGraduation.heading",
      description: "About.timeline.2016.middleSchoolGraduation.description",
      Icon: ({ className = "" }) => <PiStudentFill className={className} />,
    },
  ],
  "2017": [
    {
      date: "2017-06-20",
      heading: "About.timeline.2017.firstJob.heading",
      description: "About.timeline.2017.firstJob.description",
      Icon: ({ className = "" }) => <GrUserWorker className={className} />,
    },
    {
      date: "2017-06-01",
      heading: "About.timeline.2017.englishStudies.heading",
      description: "About.timeline.2017.englishStudies.description",
      Icon: ({ className = "" }) => <RiEnglishInput className={className} />,
    },
  ],
  "2018": [
    {
      date: "2018-02-04",
      heading: "About.timeline.2018.technicalCourse.heading",
      description: "About.timeline.2018.technicalCourse.description",
      Icon: ({ className = "" }) => <BiSolidSchool className={className} />,
    },
  ],
  "2019": [
    {
      date: "2019-01-01",
      heading: "About.timeline.2019.endOfEnglishCourse.heading",
      description: "About.timeline.2019.endOfEnglishCourse.description",
      Icon: ({ className = "" }) => <RiEnglishInput className={className} />,
    },
    {
      date: "2019-12-01",
      heading: "About.timeline.2019.highSchoolGraduation.heading",
      description: "About.timeline.2019.highSchoolGraduation.description",
      Icon: ({ className = "" }) => <IoSchool className={className} />,
    },
    {
      date: "2019-12-10",
      heading: "About.timeline.2019.technicalCourseGraduation.heading",
      description: "About.timeline.2019.technicalCourseGraduation.description",
      Icon: ({ className = "" }) => <PiStudentFill className={className} />,
    },
  ],
  "2020": [
    {
      date: "2020-01-01",
      heading: "About.timeline.2020.businessAdministrationCollege.heading",
      description: "About.timeline.2020.businessAdministrationCollege.description",
      Icon: ({ className = "" }) => <IoIosBusiness className={className} />,
    },
    {
      date: "2020-02-01",
      heading: "About.timeline.2020.covid19.heading",
      description: "About.timeline.2020.covid19.description",
      Icon: ({ className = "" }) => <RiVirusLine className={className} />,
    },
    {
      date: "2020-05-01",
      heading: "About.timeline.2020.firstCode.heading",
      description: "About.timeline.2020.firstCode.description",
      Icon: ({ className = "" }) => <CodeBracketIcon className={className} />,
    },
  ],
  "2021": [
    {
      date: "2021-02-01",
      heading: "About.timeline.2021.computerEngineeringCollege.heading",
      description: "About.timeline.2021.computerEngineeringCollege.description",
      Icon: ({ className = "" }) => <MdEngineering className={className} />,
    },
    {
      date: "2021-12-01",
      heading: "About.timeline.2021.frontEndCourseCompletion.heading",
      description: "About.timeline.2021.frontEndCourseCompletion.description",
      Icon: ({ className = "" }) => <IoLogoReact className={className} />,
    },
  ],
  "2022": [
    {
      date: "2022-05-01",
      heading: "About.timeline.2022.javaSpringCourse.heading",
      description: "About.timeline.2022.javaSpringCourse.description",
      Icon: ({ className = "" }) => <FaJava className={className} />,
    },
    {
      date: "2022-06-20",
      heading: "About.timeline.2022.firstDevJob.heading",
      description: "About.timeline.2022.firstDevJob.description",
      Icon: ({ className = "" }) => <MdDeveloperMode className={className} />,
    },
  ],
  "2023": [
    {
      date: "2023-01-01",
      heading: "About.timeline.2023.changedCourse.heading",
      description: "About.timeline.2023.changedCourse.description",
      Icon: ({ className = "" }) => <ImSad2 className={className} />,
    },
    {
      date: "2023-02-01",
      heading: "About.timeline.2023.movedOut.heading",
      description: "About.timeline.2023.movedOut.description",
      Icon: ({ className = "" }) => <BsFillHousesFill className={className} />,
    },
    {
      date: "2023-06-01",
      heading: "About.timeline.2023.typescriptCourseCompletion.heading",
      description: "About.timeline.2023.typescriptCourseCompletion.description",
      Icon: ({ className = "" }) => <BiLogoTypescript className={className} />,
    },
    {
      date: "2023-12-20",
      heading: "About.timeline.2023.seriousIllness.heading",
      description: "About.timeline.2023.seriousIllness.description",
      Icon: ({ className = "" }) => <MdSick className={className} />,
    },
  ],
  "2024": [
    {
      date: "2024-01-01",
      heading: "About.timeline.2024.laravelProjects.heading",
      description: "About.timeline.2024.laravelProjects.description",
      Icon: ({ className = "" }) => <IoLogoLaravel className={className} />,
    },
    {
      date: "2024-02-01",
      heading: "About.timeline.2024.tailwindProjects.heading",
      description: "About.timeline.2024.tailwindProjects.description",
      Icon: ({ className = "" }) => <SiTailwindcss className={className} />,
    },
    {
      date: "2024-05-01",
      heading: "About.timeline.2024.nextjsProjects.heading",
      description: "About.timeline.2024.nextjsProjects.description",
      Icon: ({ className = "" }) => <TbBrandNextjs className={className} />,
    },
  ],
};
