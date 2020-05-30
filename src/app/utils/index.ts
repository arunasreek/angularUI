import * as moment from 'moment'; // add this 1 of 4

export const getLoggedInOrganizationId = (orgId) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let currentOrgId = JSON.parse(localStorage.getItem('orgId'));

    if (orgId) {
        localStorage.setItem('orgId', JSON.stringify(orgId));
    } else if (currentOrgId) {
        return currentOrgId;
    }

    return currentUser ? Number(currentUser.orgId) !== 0 ? Number(currentUser.orgId) : 0 : 0;

    // TODO: remove hardcoded org Id
    // return currentUser ? 12 : 0;
}
export const getLoggedInUserId = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser ? currentUser.userId : 0;
}

export const getLoggedInOrganizationIdForDataIngestion = (orgId) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //return currentUser ? Number(currentUser.orgId) : 0;
    // TODO: remove hardcoded org Id
    //return currentUser ? 12 : 0;
}

export const getFileTypeExtenstion = () => {
    return ["csv", "xlsx", "xls"];
}

export const getImageExtenstion = () => {
    return ["jpg", "jpeg", "png"];
}

export const getLocalDateTime = (date) => {
    return moment.utc(date).local().format('DD.MM.YYYY, HH:mm');
}

export const getLocalDateTimeFormat = (date) => {
    return moment.utc(date, 'DD/MM/YYYY HH:mm:ss').local().format('DD MMM, ddd YYYY HH:mm');
}

//ISO DateFormat Convert
export const getLocalDateISOTimeFormat = (date) => {
    return moment.utc(date).local().format('DD MMM, ddd YYYY HH:mm');
}

export const getDDMMMYYYYFormat = (date) => {
    return moment.utc(date).local().format('DD MMM YYYY');
}