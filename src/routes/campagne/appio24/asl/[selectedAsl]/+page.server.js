// @ts-nocheck
import jsforce from 'jsforce';
import { promiseQuery } from '$lib/index.js';
import { redirect } from '@sveltejs/kit';
import * as d3 from 'd3';

const MAXFETCH = 9999999999;

export async function load({ locals, params, url }) {

    const connstandard = locals.user.connectionStandard;
    const connection = connstandard;

    if (connection) {
        const conn = new jsforce.Connection({
            instanceUrl: "https://padigitale2026.my.salesforce.com",
            accessToken: connection
        });

        const selectedAsl = params.selectedAsl ? params.selectedAsl : '';


        let enti, allEnti, serviziAttivi, candidature, candidature12, candidature141, candidaturepagopa, serviziACatalogo;

        if (selectedAsl && selectedAsl !== 'none') {
            serviziACatalogo = await promiseQuery(
                conn,
                `select Id, Anagrafica_Servizi__r.Categoria__c, Name, Anagrafica_Servizi__r.Codice_Tassonomico__c,  Servizio_Obbligatorio__c
                from Catalogo_Servizi__c  
                where Cluster__r.Tipologia_Ente__c = 'ASL'
                and Cluster__r.Misura__r.Name = '1.4.3 Adozione PagoPA e AppIO'
                and Cluster__r.Pacchetto__c = null  
                and Cluster__r.Range__c = '<=0.5mln as' 
                order by Anagrafica_Servizi__r.Categoria__c,Name asc`, MAXFETCH
            );
        }

        /*
        const enti = await promiseQuery(conn, 
            `Select Id, Name,  ShippingState,  Codice_amministrativo__c, Active__c, Area_geografica__c,  Regione__c 
            from Account 
            where IsDeleted = false 
            and (Account_Manager__c = '` + locals.user.utentestandard.idsf + `' or Tech_Implementation_User__c ='` + locals.user.utentestandard.idsf + `') 
            and Tipologia_Ente__c = 'Comuni'  
            and Name!='ACCOUNTSCATOLA' order by Name`, MAXFETCH);
        */
        enti = promiseQuery(conn,
            `Select Id, Name,  ShippingState,  Codice_amministrativo__c, Active__c, Area_geografica__c,  Regione__c 
                from Account 
                where IsDeleted = false 
                and Tipologia_Ente__c = 'ASL' 
                and  Name!='Account Marketing Cloud 1' and Name!='ACCOUNTSCATOLA'  and Name!='XXDTD_C2' and Name!='XXDTD_C' and Name!='YYACN_R' order by Name`, MAXFETCH);

        if (selectedAsl && selectedAsl !== 'none') {
            /*allEnti =  promiseQuery(conn, 
                `Select Id, Name,  ShippingState,  Codice_amministrativo__c, Active__c, Area_geografica__c,  Regione__c 
                from Account 
                where IsDeleted = false 
                and Tipologia_Ente__c = 'Comuni'  
                and  Name!='Account Marketing Cloud 1' and Name!='ACCOUNTSCATOLA'  and Name!='XXDTD_C2' and Name!='XXDTD_C' and Name!='YYACN_R' order by Name`, MAXFETCH);
    */

            serviziAttivi = promiseQuery(
                conn,
                `select Id, Ente__c, Descrizione_Servizio__c, Nome_Servizio__c, Codice_Catalogo_Attribuito__c, Codice_Servizio__c, Data_Attivazione__c, Fondo_Innovazione__c, Argomento__c 
            from Servizio_Attivo__c 
            where Piattaforma_Servizi__c = 'AppIO' and IsDeleted_pagoPA__c = false
            and  Name!='Account Marketing Cloud 1' and Name!='ACCOUNTSCATOLA'  and Name!='XXDTD_C2' and Name!='XXDTD_C' and Name!='YYACN_R' 
            and Ente__r.Id = '`+ selectedAsl + `' and Ente__r.Tipologia_Ente__c = 'ASL'`, MAXFETCH
            );

            candidature = promiseQuery(
                conn,
                `select Candidatura__r.outfunds__Applying_Organization__c, Id, name, Codice_Servizio__c, Codice_tassonomico_ente__c, codice_catalogo_attribuito_143appIO__c, Candidatura__r.outfunds__FundingProgram__r.Name, Candidatura__r.outfunds__Status__c, Candidatura__r.Stato_Progetto__c, Candidatura__r.TipologiaVerifica__c, Stato_Attivit__c, Candidatura__r.Istanza_modifica_conclusa__c, Candidatura__r.Esito_campagna_duplicato_143_appIO__c, Candidatura__r.Codice_inserito_manualmente__c, Candidatura__r.Risposta_PEC_143_appIO__c, argomento_attribuito_143appIO__c
            from Servizio_Richiesta__c 
            where Selezionato__c = true            
            and  Candidatura__r.outfunds__Applying_Organization__r.Name!='Account Marketing Cloud 1' and Candidatura__r.outfunds__Applying_Organization__r.Name!='ACCOUNTSCATOLA'  and Candidatura__r.outfunds__Applying_Organization__r.Name!='XXDTD_C2' and Candidatura__r.outfunds__Applying_Organization__r.Name!='XXDTD_C' and Candidatura__r.outfunds__Applying_Organization__r.Name!='YYACN_R'
            and Candidatura__r.outfunds__Applying_Organization__r.id = '`+ selectedAsl + `' and Candidatura__r.outfunds__Applying_Organization__r.Tipologia_Ente__c = 'ASL'
            and Candidatura__r.outfunds__FundingProgram__r.Pacchetto__c = 'AppIO' 
            and Candidatura__r.outfunds__Status__c in ('AMMESSA', 'AMMESSA CON RISERVA', 'ACCETTATA', 'IN VERIFICA', 'FINANZIATA')`, MAXFETCH
            );

            candidature12 = promiseQuery(
                conn,
                `select Candidatura__r.outfunds__Applying_Organization__c, Id, Name, Candidatura__r.outfunds__FundingProgram__r.Name, Candidatura__r.outfunds__Status__c, Candidatura__r.Stato_Progetto__c, Candidatura__r.TipologiaVerifica__c, Stato_Attivit__c
            from Servizio_Richiesta__c 
            where Selezionato__c = true 
            and Candidatura__r.outfunds__Applying_Organization__r.Name!='Account Marketing Cloud 1' and Candidatura__r.outfunds__Applying_Organization__r.Name!='ACCOUNTSCATOLA'  and Candidatura__r.outfunds__Applying_Organization__r.Name!='XXDTD_C2' and Candidatura__r.outfunds__Applying_Organization__r.Name!='XXDTD_C' and Candidatura__r.outfunds__Applying_Organization__r.Name!='YYACN_R'
            and Candidatura__r.outfunds__Applying_Organization__r.id = '`+ selectedAsl + `' and Candidatura__r.outfunds__Applying_Organization__r.Tipologia_Ente__c = 'ASL'
            and Candidatura__r.outfunds__FundingProgram__r.outfunds__Parent_Funding_Program__r.Name = '1.2 Abilitazione e facilitazione migrazione al Cloud' 
            and Candidatura__r.outfunds__Status__c in ('AMMESSA', 'AMMESSA CON RISERVA', 'ACCETTATA', 'IN VERIFICA', 'FINANZIATA')`, MAXFETCH
            );

            candidature141 = promiseQuery(
                conn,
                `select Candidatura__r.outfunds__Applying_Organization__c, Id, Name, Candidatura__r.outfunds__FundingProgram__r.Name, Candidatura__r.outfunds__Status__c, Candidatura__r.Stato_Progetto__c, Candidatura__r.TipologiaVerifica__c, Stato_Attivit__c
            from Servizio_Richiesta__c 
            where Selezionato__c = true 
            and Candidatura__r.outfunds__Applying_Organization__r.Name!='Account Marketing Cloud 1' and Candidatura__r.outfunds__Applying_Organization__r.Name!='ACCOUNTSCATOLA'  and Candidatura__r.outfunds__Applying_Organization__r.Name!='XXDTD_C2' and Candidatura__r.outfunds__Applying_Organization__r.Name!='XXDTD_C' and Candidatura__r.outfunds__Applying_Organization__r.Name!='YYACN_R'
            and Candidatura__r.outfunds__Applying_Organization__r.id = '`+ selectedAsl + `' and Candidatura__r.outfunds__Applying_Organization__r.Tipologia_Ente__c = 'ASL'
            and Candidatura__r.outfunds__FundingProgram__r.outfunds__Parent_Funding_Program__r.Name = '1.4.1 Esperienza del cittadino nei servizi pubblici' 
            and Candidatura__r.outfunds__Status__c in ('AMMESSA', 'AMMESSA CON RISERVA', 'ACCETTATA', 'IN VERIFICA', 'FINANZIATA')`, MAXFETCH
            );

            candidaturepagopa = promiseQuery(
                conn,
                `select Candidatura__r.outfunds__Applying_Organization__c, Id, Name, Candidatura__r.outfunds__FundingProgram__r.Name, Candidatura__r.outfunds__Status__c, Candidatura__r.Stato_Progetto__c, Candidatura__r.TipologiaVerifica__c, Stato_Attivit__c
            from Servizio_Richiesta__c 
            where Selezionato__c = true 
            and  Candidatura__r.outfunds__Applying_Organization__r.Name!='Account Marketing Cloud 1' and Candidatura__r.outfunds__Applying_Organization__r.Name!='ACCOUNTSCATOLA'  and Candidatura__r.outfunds__Applying_Organization__r.Name!='XXDTD_C2' and Candidatura__r.outfunds__Applying_Organization__r.Name!='XXDTD_C' and Candidatura__r.outfunds__Applying_Organization__r.Name!='YYACN_R'
            and Candidatura__r.outfunds__Applying_Organization__r.id = '`+ selectedAsl + `' and Candidatura__r.outfunds__Applying_Organization__r.Tipologia_Ente__c = 'ASL'
            and Candidatura__r.outfunds__FundingProgram__r.outfunds__Parent_Funding_Program__r.Name = '1.4.3 Adozione PagoPA e AppIO' 
            and Candidatura__r.outfunds__FundingProgram__r.Pacchetto__c ='PagoPA' 
            and Candidatura__r.outfunds__Status__c in ('AMMESSA', 'AMMESSA CON RISERVA', 'ACCETTATA', 'IN VERIFICA', 'FINANZIATA')`, MAXFETCH
            );
        }


        if (selectedAsl && selectedAsl !== 'none') {

            const all = Promise.all([
                enti,
                //allEnti,
                serviziAttivi,
                candidature,
                candidature12,
                candidature141,
                candidaturepagopa
            ]);
            const values = await all;


            return {
                enti: values[0].filter(x => x.Name.indexOf("Liquidazione Coatta")===-1),
                //allEnti: values[1],
                serviziACatalogo: serviziACatalogo,
                serviziAttivi: values[1],
                candidature: values[2],
                //snappioProvincia: snappioProvincia,
                //snappioRegione: snappioRegione,
                //snappioNazionale: snappioNazionale,
                candidature12: values[3],
                candidature141: values[4],
                candidaturepagopa: values[5],
                selectedAsl: selectedAsl
            }
        } else {
            const all = Promise.all([
                enti
            ]);
            const values = await all;


            return {
                enti: values[0].filter(x => x.Name.indexOf("Liquidazione Coatta")===-1 && x.Name.indexOf("SOPPRESSO")===-1),
                selectedAsl: selectedAsl
            }
        }


    } else {
        throw redirect(303, 'users');
    }

}

