const {getComment} = require('../Utils/getComment');


describe("Comment tests", () => {
    test('Time 01:00 and cloud cover 45 should return Clear', () => {
      expect(getComment({
        time_stamp:"2022-03-12 01:00",
        dewpoint_temperature: "25",
        mean_sea_level_pressure: "102",
        wind_speed:"50",
        total_cloud_cover:"45",
        relative_humidity:"35",
        surface_solar_radiation:"50",
        surface_thermal_radiation:"65",
        temperature:"27"
    })).toBe("Clear");
    });
    test('Time 10:00 and cloud cover 55 should return Cloudy Day', () => {
        expect(getComment({
            time_stamp:"2022-03-12 10:00",
            dewpoint_temperature: "25",
            mean_sea_level_pressure: "102",
            wind_speed:"50",
            total_cloud_cover:"55",
            relative_humidity:"35",
            surface_solar_radiation:"50",
            surface_thermal_radiation:"65",
            temperature:"27"
        })).toBe("Cloudy Day");
        });
    test('Time 15:00 and cloud cover 25 should return Sunny', () => {
        expect(getComment({
            time_stamp:"2022-03-12 15:00",
            dewpoint_temperature: "25",
            mean_sea_level_pressure: "102",
            wind_speed:"50",
            total_cloud_cover:"25",
            relative_humidity:"35",
            surface_solar_radiation:"50",
            surface_thermal_radiation:"65",
            temperature:"27"
        })).toBe("Sunny");
    });
    test('Time 18:00 and cloud cover 20 should return Cloudy Night', () => {
        expect(getComment({
            time_stamp:"2022-03-12 18:00",
            dewpoint_temperature: "25",
            mean_sea_level_pressure: "102",
            wind_speed:"50",
            total_cloud_cover:"20",
            relative_humidity:"35",
            surface_solar_radiation:"50",
            surface_thermal_radiation:"65",
            temperature:"27"
        })).toBe("Clear");
    });
    test('Time 00:00 and cloud cover 35 should return Clear', () => {
        expect(getComment({
            time_stamp:"2022-03-12 00:00",
            dewpoint_temperature: "25",
            mean_sea_level_pressure: "102",
            wind_speed:"50",
            total_cloud_cover:"35",
            relative_humidity:"35",
            surface_solar_radiation:"50",
            surface_thermal_radiation:"65",
            temperature:"27"
        })).toBe("Clear");
    });
})