import { AxiosRequestConfig, AxiosPromise, AxiosStatic } from "axios";
import { AttachmentUsages, Resources, Verbs } from "./constants";
import { getSearchQueryParamsAsObject } from "./helpers/getSearchQueryParamsAsObject/getSearchQueryParamsAsObject";
import { calculateISO8601Duration } from "./helpers/calculateISO8601Duration/calculateISO8601Duration";
import { getXAPILaunchData } from "./helpers/getXAPILaunchData/getXAPILaunchData";
import { getTinCanLaunchData } from "./helpers/getTinCanLaunchData/getTinCanLaunchData";
import { toBasicAuth } from "./helpers/toBasicAuth/toBasicAuth";
import { Agent, Statement, StatementResponseWithAttachments, StatementsResponse, StatementsResponseWithAttachments } from "./resources/statement";
import { XAPIConfig } from "./XAPIConfig";
import { GetParamsBase } from "./resources/GetParamsBase";
import { About } from "./resources/about/About";
import { GetAboutParams } from "./resources/about/getAbout/GetAboutParams";
import { GetActivityParams } from "./resources/activities/getActivity/GetActivityParams";
import { Activity } from "./resources/activities/Activity";
import { GetAgentParams } from "./resources/agents/getAgent/GetAgentParams";
import { Person } from "./resources/agents/Person";
import { Document } from "./resources/document/Document";
import { CreateActivityProfileParams } from "./resources/document/activityProfile/createActivityProfile/CreateActivityProfileParams";
import { DeleteActivityProfileParams } from "./resources/document/activityProfile/deleteActivityProfile/DeleteActivityProfileParams";
import { GetActivityProfileParams } from "./resources/document/activityProfile/getActivityProfile/GetActivityProfileParams";
import { GetActivityProfilesParams } from "./resources/document/activityProfile/getActivityProfiles/GetActivityProfilesParams";
import { SetActivityProfileParams } from "./resources/document/activityProfile/setActivityProfile/SetActivityProfileParams";
import { CreateAgentProfileParams } from "./resources/document/agentProfile/createAgentProfile/CreateAgentProfileParams";
import { DeleteAgentProfileParams } from "./resources/document/agentProfile/deleteAgentProfile/DeleteAgentProfileParams";
import { GetAgentProfileParams } from "./resources/document/agentProfile/getAgentProfile/GetAgentProfileParams";
import { GetAgentProfilesParams } from "./resources/document/agentProfile/getAgentProfiles/GetAgentProfilesParams";
import { SetAgentProfileParams } from "./resources/document/agentProfile/setAgentProfile/SetAgentProfileParams";
import { CreateStateParams } from "./resources/document/state/createState/CreateStateParams";
import { DeleteStateParams } from "./resources/document/state/deleteState/DeleteStateParams";
import { DeleteStatesParams } from "./resources/document/state/deleteStates/DeleteStatesParams";
import { GetStateParams } from "./resources/document/state/getState/GetStateParams";
import { GetStatesParams } from "./resources/document/state/getStates/GetStatesParams";
import { SetStateParams } from "./resources/document/state/setState/SetStateParams";
import { GetMoreStatementsParams } from "./resources/statement/getMoreStatements/GetMoreStatementsParams";
import { GetStatementParams, GetStatementParamsWithAttachments, GetStatementParamsWithoutAttachments } from "./resources/statement/getStatement/GetStatementParams";
import { GetStatementsParams, GetStatementsParamsWithAttachments, GetStatementsParamsWithoutAttachments } from "./resources/statement/getStatements/GetStatementsParams";
import { GetVoidedStatementParams, GetVoidedStatementParamsWithAttachments, GetVoidedStatementParamsWithoutAttachments } from "./resources/statement/getVoidedStatement/GetVoidedStatementParams";
import { SendStatementParams } from "./resources/statement/sendStatement/SendStatementParams";
import { SendStatementsParams } from "./resources/statement/sendStatements/SendStatementsParams";
import { VoidStatementParams } from "./resources/statement/voidStatement/VoidStatementParams";
import { VoidStatementsParams } from "./resources/statement/voidStatements/VoidStatementsParams";
export * from "./helpers/getTinCanLaunchData/TinCanLaunchData";
export * from "./helpers/getXAPILaunchData/XAPILaunchData";
export * from "./resources/about/About";
export * from "./resources/activities/Activity";
export * from "./resources/activities/ActivityDefinition";
export * from "./resources/activities/getActivity/GetActivityParams";
export * from "./resources/agents/Person";
export * from "./resources/agents/getAgent/GetAgentParams";
export * from "./resources/document/Document";
export * from "./resources/document/activityProfile/createActivityProfile/CreateActivityProfileParams";
export * from "./resources/document/activityProfile/deleteActivityProfile/DeleteActivityProfileParams";
export * from "./resources/document/activityProfile/getActivityProfile/GetActivityProfileParams";
export * from "./resources/document/activityProfile/getActivityProfiles/GetActivityProfilesParams";
export * from "./resources/document/activityProfile/setActivityProfile/SetActivityProfileParams";
export * from "./resources/document/agentProfile/createAgentProfile/CreateAgentProfileParams";
export * from "./resources/document/agentProfile/deleteAgentProfile/DeleteAgentProfileParams";
export * from "./resources/document/agentProfile/getAgentProfile/GetAgentProfileParams";
export * from "./resources/document/agentProfile/getAgentProfiles/GetAgentProfilesParams";
export * from "./resources/document/agentProfile/setAgentProfile/SetAgentProfileParams";
export * from "./resources/document/state/createState/CreateStateParams";
export * from "./resources/document/state/deleteState/DeleteStateParams";
export * from "./resources/document/state/deleteStates/DeleteStatesParams";
export * from "./resources/document/state/getState/GetStateParams";
export * from "./resources/document/state/getStates/GetStatesParams";
export * from "./resources/document/state/setState/SetStateParams";
export * from "./resources/statement";
export * from "./resources/statement/getMoreStatements/GetMoreStatementsParams";
export * from "./resources/statement/getStatement/GetStatementParams";
export * from "./resources/statement/getStatements/GetStatementsParams";
export * from "./resources/statement/getVoidedStatement/GetVoidedStatementParams";
export * from "./resources/statement/sendStatement/SendStatementParams";
export * from "./resources/statement/sendStatements/SendStatementsParams";
export * from "./resources/statement/voidStatement/VoidStatementParams";
export * from "./resources/statement/voidStatements/VoidStatementsParams";
interface RequestParams {
    [key: string]: any;
    agent?: Agent;
}
declare class XAPI {
    static default: typeof XAPI;
    static AttachmentUsages: typeof AttachmentUsages;
    static Verbs: typeof Verbs;
    static calculateISO8601Duration: typeof calculateISO8601Duration;
    static getSearchQueryParamsAsObject: typeof getSearchQueryParamsAsObject;
    static getXAPILaunchData: typeof getXAPILaunchData;
    static getTinCanLaunchData: typeof getTinCanLaunchData;
    static toBasicAuth: typeof toBasicAuth;
    protected endpoint: string;
    private headers;
    private axios;
    constructor(params: XAPIConfig, axios?: AxiosStatic);
    getAxios(): AxiosStatic;
    setAxios(axios: AxiosStatic): void;
    protected requestResource(params: {
        resource: Resources;
        queryParams?: RequestParams;
        requestConfig?: AxiosRequestConfig | undefined;
        requestOptions?: GetParamsBase;
    }): AxiosPromise<any>;
    protected requestURL(url: string, requestConfig?: AxiosRequestConfig | undefined): AxiosPromise<any>;
    private generateURL;
}
interface XAPI {
    getAbout(params?: GetAboutParams): AxiosPromise<About>;
    getActivity(params: GetActivityParams): AxiosPromise<Activity>;
    getAgent(params: GetAgentParams): AxiosPromise<Person>;
    createActivityProfile(params: CreateActivityProfileParams): AxiosPromise<void>;
    setActivityProfile(params: SetActivityProfileParams): AxiosPromise<void>;
    getActivityProfiles(params: GetActivityProfilesParams): AxiosPromise<string[]>;
    getActivityProfile(params: GetActivityProfileParams): AxiosPromise<Document>;
    deleteActivityProfile(params: DeleteActivityProfileParams): AxiosPromise<void>;
    createAgentProfile(params: CreateAgentProfileParams): AxiosPromise<void>;
    setAgentProfile(params: SetAgentProfileParams): AxiosPromise<void>;
    getAgentProfiles(params: GetAgentProfilesParams): AxiosPromise<string[]>;
    getAgentProfile(params: GetAgentProfileParams): AxiosPromise<Document>;
    deleteAgentProfile(params: DeleteAgentProfileParams): AxiosPromise<void>;
    createState(params: CreateStateParams): AxiosPromise<void>;
    setState(params: SetStateParams): AxiosPromise<void>;
    getStates(params: GetStatesParams): AxiosPromise<string[]>;
    getState(params: GetStateParams): AxiosPromise<Document>;
    deleteState(params: DeleteStateParams): AxiosPromise<void>;
    deleteStates(params: DeleteStatesParams): AxiosPromise<void>;
    getStatement(params: GetStatementParamsWithAttachments): AxiosPromise<StatementResponseWithAttachments>;
    getStatement(params: GetStatementParamsWithoutAttachments): AxiosPromise<Statement>;
    getStatement(params: GetStatementParams): AxiosPromise<Statement | StatementResponseWithAttachments>;
    getVoidedStatement(params: GetVoidedStatementParamsWithAttachments): AxiosPromise<StatementResponseWithAttachments>;
    getVoidedStatement(params: GetVoidedStatementParamsWithoutAttachments): AxiosPromise<Statement>;
    getVoidedStatement(params: GetVoidedStatementParams): AxiosPromise<Statement | StatementResponseWithAttachments>;
    getStatements(params: GetStatementsParamsWithAttachments): AxiosPromise<StatementsResponseWithAttachments>;
    getStatements(params: GetStatementsParamsWithoutAttachments): AxiosPromise<StatementsResponse>;
    getStatements(params: GetStatementsParams): AxiosPromise<StatementsResponse | StatementsResponseWithAttachments>;
    getMoreStatements(params: GetMoreStatementsParams): AxiosPromise<StatementsResponse | StatementsResponseWithAttachments>;
    sendStatement(params: SendStatementParams): AxiosPromise<string[]>;
    sendStatements(params: SendStatementsParams): AxiosPromise<string[]>;
    voidStatement(params: VoidStatementParams): AxiosPromise<string[]>;
    voidStatements(params: VoidStatementsParams): AxiosPromise<string[]>;
}
export default XAPI;
