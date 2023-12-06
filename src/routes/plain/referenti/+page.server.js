import { promiseQuery } from '$lib';
import { redirect } from '@sveltejs/kit';
import jsforce from 'jsforce';

const MAX_FETCH = 1000000;

export async function load({ locals }) {
    const connstandard = locals.user.connectionStandard;
    const connasseveratore = locals.user.connectionAsseveratore;
    let referenti = [];
    if (connstandard || connasseveratore) {
        if (connstandard) {
            const conn = new jsforce.Connection({
                instanceUrl: "https://padigitale2026.my.salesforce.com",
                accessToken: connstandard
            });
            const qreferenti = promiseQuery(conn, `select Id, LastName, FirstName, Salutation, MiddleName, Suffix, Name, MailingStreet, MailingCity, MailingState, MailingPostalCode, MailingCountry, MailingLatitude, MailingLongitude, MailingGeocodeAccuracy, MailingAddress, Phone, Fax, MobilePhone, HomePhone, OtherPhone,  Email, Title, Department, Birthdate,  CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp, LastActivityDate, LastCURequestDate, LastCUUpdateDate, LastViewedDate, LastReferencedDate,    PhotoUrl,    FiscalCode__c, Profilo__c, Stato__c, Amministrazione__c, Account.Name  from contact where accountid in (Select Id  from Account where IsDeleted = false and Name!='ACCOUNTSCATOLA')`, MAX_FETCH);
            const all = Promise.all([qreferenti]);
            const values = await all;
            let referentiStandard = values[0];
            referentiStandard.forEach((referente) => referente.portafoglio = 'Standard');
            referenti = referenti.concat(referentiStandard);
        }
        if (connasseveratore) {
            const conn = new jsforce.Connection({
                instanceUrl: "https://padigitale2026.my.salesforce.com",
                accessToken: connasseveratore
            });
            const qreferenti = promiseQuery(conn, `select Id, LastName, FirstName, Salutation, MiddleName, Suffix, Name, MailingStreet, MailingCity, MailingState, MailingPostalCode, MailingCountry, MailingLatitude, MailingLongitude, MailingGeocodeAccuracy, MailingAddress, Phone, Fax, MobilePhone, HomePhone, OtherPhone,  Email, Title, Department, Birthdate,  CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, SystemModstamp, LastActivityDate, LastCURequestDate, LastCUUpdateDate, LastViewedDate, LastReferencedDate,    PhotoUrl,    FiscalCode__c, Profilo__c, Stato__c, Amministrazione__c, Account.Name  from contact where accountid in (Select Id  from Account where IsDeleted = false and Name!='ACCOUNTSCATOLA')`, MAX_FETCH);
            const all = Promise.all([qreferenti]);
            const values = await all;
            let referentiAsseveratore = values[0];
            referentiAsseveratore.forEach((referente) => referente.portafoglio = 'Asseveratore');
            referenti = referenti.concat(referentiAsseveratore);
        }
        return {
            referenti: referenti
        };
    } else {
        throw redirect(303, '/io');
    }
}

