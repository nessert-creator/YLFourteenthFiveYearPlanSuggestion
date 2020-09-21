var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from '../utils/request.js';
import fetch from 'dva/fetch';
export function login2(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/Account/Login`, options);
    });
}
export function thirdPartyList(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/Account/ThirdPartyList`, options);
    });
}
export function thirdPartyLogin(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/Account/ThirdPartyLogin`, options);
    });
}
export function bindingThirdParty(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/Account/BindingThirdParty`, options);
    });
}
export function getBindingThirdPartyList(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/Account/GetBindingThirdPartyList`, options);
    });
}
export function loginUserBindingThirdParty(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/Account/LoginUserBindingThirdParty`, options);
    });
}
export function loginUserUnbindingThirdParty(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/Account/LoginUserUnbindingThirdParty`, options);
    });
}
export function qrlogin(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/QRLogin/Login`, options);
    });
}
export function logoutmy(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/Account/Logout`, options);
    });
}
export function getLessjs() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch('/color/less.min.js', {
            method: 'get',
            withCredentials: true,
            credentials: 'include'
        }).then((response) => response.text());
    });
}
export function signalrjs() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(`${location.protocol}//${location.host}/signalr/hubs`, {
            method: 'get',
            withCredentials: true,
            credentials: 'include'
        }).then((response) => response.text());
    });
}
export function getServerImage(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return request(`/UE/controller.ashx?action=listimage&start=${options.param.start}&size=${options.param
            .size}&noCache=${Math.random()}`, options);
    });
}
export function getCssFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(path, {
            method: 'get',
            withCredentials: true,
            credentials: 'include'
        }).then((response) => response.text());
    });
}
