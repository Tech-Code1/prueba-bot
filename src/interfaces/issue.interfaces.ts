export interface IIssues {
    status:  number;
    url:     string;
    headers: IHeaders;
    data:    IData[];
}

/* export interface IData {
    url:                      string;
    repository_url:           string;
    labels_url:               string;
    comments_url:             string;
    events_url:               string;
    html_url:                 string;
    id:                       number;
    node_id:                  string;
    number:                   number;
    title:                    string;
    user:                     Assignee;
    labels:                   any[];
    state:                    string;
    locked:                   boolean;
    assignee:                 Assignee;
    assignees:                any[];
    milestone:                null;
    comments:                 number;
    created_at:               Date;
    updated_at:               Date;
    closed_at:                null;
    author_association:       string;
    active_lock_reason:       null;
    body:                     null;
    reactions:                Assignee;
    timeline_url:             string;
    performed_via_github_app: null;
    state_reason:             null;
} */

export interface Assignee {
}

export interface IHeaders {
    "access-control-allow-origin":            string;
    "access-control-expose-headers":          string;
    "cache-control":                          string;
    connection:                               string;
    "content-encoding":                       string;
    "content-security-policy":                string;
    "content-type":                           string;
    date:                                     string;
    etag:                                     string;
    "github-authentication-token-expiration": string;
    "referrer-policy":                        string;
    server:                                   string;
    "strict-transport-security":              string;
    "transfer-encoding":                      string;
    vary:                                     string;
    "x-content-type-options":                 string;
    "x-frame-options":                        string;
    "x-github-api-version-selected":          Date;
    "x-github-media-type":                    string;
    "x-github-request-id":                    string;
    "x-ratelimit-limit":                      string;
    "x-ratelimit-remaining":                  string;
    "x-ratelimit-reset":                      string;
    "x-ratelimit-resource":                   string;
    "x-ratelimit-used":                       string;
    "x-xss-protection":                       string;
}

export interface IData {
    url?:                      string;
    repository_url?:           string;
    labels_url?:               string;
    comments_url?:             string;
    events_url?:               string;
    html_url?:                 string;
    id?:                       number;
    node_id?:                  string;
    number?:                   number;
    title?:                    string;
    user?:                     IAssignee;
    labels?:                   ILabel[];
    state?:                    string;
    locked?:                   boolean;
    assignee?:                 IAssignee;
    assignees?:                IAssignee[];
    milestone?:                null;
    comments?:                 number;
    created_at?:               Date;
    updated_at?:               Date;
    closed_at?:                null;
    author_association?:       string;
    active_lock_reason?:       null;
    body?:                     null;
    reactions?:                IReactions;
    timeline_url?:             string;
    performed_via_github_app?: null;
    state_reason?:             null;
}

export interface IAssignee {
    login?:               string;
    id?:                  number;
    node_id?:             string;
    avatar_url?:          string | null;
    gravatar_id?:         string;
    url?:                 string;
    html_url?:            string;
    followers_url?:       string;
    following_url?:       string;
    gists_url?:           string;
    starred_url?:         string;
    subscriptions_url?:   string;
    organizations_url?:   string;
    repos_url?:           string;
    events_url?:          string;
    received_events_url?: string;
    type?:                string;
    site_admin?:          boolean;
}

export interface ILabel {
    id?:          number;
    node_id?:     string;
    url?:         string;
    name?:        string;
    color?:       string;
    default?:     boolean;
    description?: string;
}

export interface IReactions {
    url?:         string;
    total_count?: number;
    "+1"?:        number;
    "-1"?:        number;
    laugh?:       number;
    hooray?:      number;
    confused?:    number;
    heart?:       number;
    rocket?:      number;
    eyes?:        number;
}