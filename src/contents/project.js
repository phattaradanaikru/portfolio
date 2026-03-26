import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picAtten from '../assets/Attendance.png';
import picBmr from '../assets/bmr.png';
import picTravel from '../assets/travel.png';
import picFeeder from '../assets/feeder.png';

export const data = [
    {
        title: "NodeJS · Attendance Leave Management",
        link: "https://github.com/phattaradanaikru/Project_Attendance-Leave-Management",
        materials: [
            { type: faGithub, link: "https://github.com/phattaradanaikru/Project_Attendance-Leave-Management" },
        ],
        descriptions: [
            "Built a comprehensive attendance and leave management system with a responsive web interface using HTML, CSS, and JavaScript for real-time tracking and management of employee attendance records.",
        ],
        skills: [
            ["HTML", "CSS", "JS"],
            ["Docker","NginX", "NodeJS"],
            ["Express", "SQL"],
        ],
        picture: picAtten,
    },
    {
        title: "Spring Boot · Bmr Calculator API",
        link: "https://github.com/phattaradanaikru/bmr_calculator",
        materials: [
            { type: faGithub, link: "https://github.com/phattaradanaikru/bmr_calculator" },
        ],
        descriptions: [
            "Developed a RESTful API service for BMI and BMR calculations using Spring Boot and Java, providing accurate health metrics calculations.",
        ],
        skills: [
            ["Spring Boot", "Java"],
        ],
        picture: picBmr,
    },
    {
        title: "Application · Travel Application",
        link: "https://github.com/phattaradanaikru/travel_application",
        materials: [
            { type: faGithub, link: "https://github.com/phattaradanaikru/travel_application" },
        ],
        descriptions: [
            "Designed and developed a mobile travel application using Flutter and Dart, enabling users to discover destinations, book accommodations, and plan trips seamlessly.",
            "Integrated with TAT (Tourism Authority of Thailand) API to provide real-time travel data and recommendations, backed by Firebase for cloud data storage.",
        ],
        skills: [
            ["Dart", "Flutter", "Firebase"],
            ["TAT API"]
        ],
        picture: picTravel,
    },
    {
        title: "Application · Feeder Application",
        link: "https://github.com/phattaradanaikru/app_for_iot_feeder",
        materials: [
            { type: faGithub, link: "https://github.com/phattaradanaikru/app_for_iot_feeder" },
        ],
        descriptions: [
            "Designed and developed a mobile feeder application using Flutter and Dart, enabling users to automate pet feeding schedules and monitor feeding activity.",
            "Integrated with IoT sensors to provide real-time data on feeder status and usage, backed by Firebase for cloud data storage.",
        ],
        skills: [
            ["Dart", "Flutter", "Firebase"],
            ["NETPIE"]
        ],
        picture: picFeeder,
    },
]