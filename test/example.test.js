// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';

const test = QUnit.test;


test('userChoice: pig, actualChoice: meg', (expect) => {
    const expected = 'escaped';
    const actual = didUserWin('pig', 'meg');
    expect.equal(actual, expected);
});

test('userChoice: meg, actualChoice:flashlight', (expect) => {
    const expected = 'escaped';
    const actual = didUserWin('meg', 'flashlight');
    expect.equal(actual, expected);
});

test('userChoice: flashlight, actualChoice: pig', (expect) => {
    const expected = 'escaped';
    const actual = didUserWin('flashlight', 'pig');
    expect.equal(actual, expected);
});

test('userChoice: meg, actualChoice: pig', (expect) => {
    const expected = 'sacrificed';
    const actual = didUserWin('meg', 'pig');
    expect.equal(actual, expected);
});

test('userChoice: pig, actualChoice: flashlight', (expect) => {
    const expected = 'sacrificed';
    const actual = didUserWin('pig', 'flashlight');
    expect.equal(actual, expected);
});

test('userChoice: flashlight, actualChoice: meg', (expect) => {
    const expected = 'sacrificed';
    const actual = didUserWin('flashlight', 'meg');
    expect.equal(actual, expected);
});