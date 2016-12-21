"use strict";
function emailValidator(control) {
    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
exports.emailValidator = emailValidator;
//CONTROL GROUP VALIDATORS
function matchingPasswords(passwordKey, confirmPasswordKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}
exports.matchingPasswords = matchingPasswords;
function checkNumber(control) {
    if (control.value <= 1 || control.value >= 5) {
        return { invalidNumber: true };
    }
}
exports.checkNumber = checkNumber;
function compareMinAndMax(minPlayers, maxPlayers) {
    return function (group) {
        var minPlayersNumber = group.controls[minPlayers];
        var maxPlayersNumber = group.controls[maxPlayers];
        if (minPlayersNumber.value > maxPlayersNumber.value) {
            return {
                invalidMinOrMaxPlayers: true
            };
        }
    };
}
exports.compareMinAndMax = compareMinAndMax;
//# sourceMappingURL=validators.js.map