export function getComment(data){
    // TODO: generate comment
    const dayTimeStart = 6;
    const dayTimeEnd = 18;
    if ((data.time_stamp.substring(11,13) > dayTimeStart) && (data.time_stamp.substring(11,13) < dayTimeEnd)){
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