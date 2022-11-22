export function getIcon(comment){
    // TODO: Complete implementation
    let iconPath = "";
    switch (comment) {
        case "Sunny":
            iconPath="icons/animated/day.svg"
            break;
        case "Cloudy":
            iconPath="icons/animated/cloudy.svg"
            break;
        case "Night":
            iconPath="icons/animated/cloudy.svg"
            break;
        default:
            break;
    }
    return iconPath;
}