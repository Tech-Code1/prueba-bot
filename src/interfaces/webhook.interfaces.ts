export interface IWebHookIssue {
    id:              number;
    guid:            string;
    delivered_at:    Date;
    redelivery:      boolean;
    duration:        number;
    status:          string;
    status_code:     number;
    event:           string;
    action:          string;
    installation_id: null;
    repository_id:   number;
    url:             string;
}
