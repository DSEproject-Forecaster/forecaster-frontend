function getIcon(comment){
    let iconPath = "";
    switch (comment) {
        case "Sunny":
            iconPath="icons/animated/day.svg"
            break;
        case "Cloudy Day":
            iconPath="icons/animated/cloudy-day-2.svg"
            break;
        case "Cloudy Night":
            iconPath="icons/animated/cloudy-night-2.svg"
            break;
        case "Clear":
            iconPath="icons/animated/night.svg"
            break;
        default:
            break;
    }
    return iconPath;
}

module.exports = {getIcon};