import { genericConfigurationWithDefaults } from '../src/GenericConfiguration';

describe('Test cases for GenericConfiguration.ts file', () => {
    test('it should assign default values, if invalid object is provided', () => {
        let obj = genericConfigurationWithDefaults({});
        expect(obj).toEqual({
            width: 640,
            height: 480,
            hideOnEnded: true,
            vastTimeout: 5000,
            maxAllowedVastTagRedirects: 3,
            allowVpaid: false,
            autoPlay: true,
            preload: true,
            mute: true,
            adText: ''
        });
    });

    test('it should assign default values for properties which are missing or have invalid datatypes', () => {
        let obj = genericConfigurationWithDefaults({
            width: '40',
            maxAllowedVastTagRedirects: 2,
            allowVpaid: 'true',
            autoPlay: false,
            preload: null,
            mute: undefined,
            adText: 'Hi'
        });
        expect(obj).toEqual({
            width: 640,
            height: 480,
            hideOnEnded: true,
            vastTimeout: 5000,
            maxAllowedVastTagRedirects: 2,
            allowVpaid: false,
            autoPlay: false,
            preload: true,
            mute: true,
            adText: 'Hi'
        });
    });

    test('it should assign the provided values, if all properties are valid', () => {
        let obj = genericConfigurationWithDefaults({
            width: 40,
            height: 80,
            vastTimeout: 4000,
            maxAllowedVastTagRedirects: 4,
            allowVpaid: true,
            autoPlay: false,
            preload: false,
            mute: true,
            adText: 'Hi Valid Object'
        });
        expect(obj).toEqual({
            width: 40,
            height: 80,
            hideOnEnded: true,
            vastTimeout: 4000,
            maxAllowedVastTagRedirects: 4,
            allowVpaid: true,
            autoPlay: false,
            preload: false,
            mute: true,
            adText: 'Hi Valid Object'
        });
    });
});
