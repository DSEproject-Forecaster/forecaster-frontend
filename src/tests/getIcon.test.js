const {getIcon} = require('../Utils/getIcon');

const iconPath = 'icons/animated/';

describe("Icon tests", () => {
    test('Comment Sunny should return day.svg', () => {
      expect(getIcon("Sunny")).toBe(iconPath+'day.svg');
    });
    test('Comment Cloudy Day should return cloudy-day-2.svg', () => {
        expect(getIcon("Cloudy Day")).toBe(iconPath+'cloudy-day-2.svg');
    });
    test('Comment Cloudy Night return cloudy-night-2.svg', () => {
        expect(getIcon("Cloudy Night")).toBe(iconPath+'cloudy-night-2.svg');
    });
    test('Comment Clear return night.svg', () => {
        expect(getIcon("Clear")).toBe(iconPath+'night.svg');
    });
});