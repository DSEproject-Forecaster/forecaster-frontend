function getComment(data){
    const dayTimeStart = 6;
    const dayTimeEnd = 18;
    const curHour = parseInt(data.time_stamp.substring(11,13))
    if ((dayTimeStart <= curHour) && (dayTimeEnd > curHour)){
        if (data.total_cloud_cover > 50){
            return "Cloudy Day";
        } else {
            return "Sunny";
        }
    } else {
        if (data.total_cloud_cover > 50){
            return "Cloudy Night";
        }else {
            return "Clear";
        }
    }
}

module.exports = {getComment};