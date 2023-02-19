import { IData } from "../interfaces/issue.interfaces";

export function processIssues(issues: IData[]) {
    issues.find(({ url, labels, title, state, assignee }) => {
  
      const response = {
        url,
        labels,
        title,
        state,
        assignee: { avatar_url: assignee?.avatar_url, url: assignee?.url },
      };
  
      console.log(response);
      // o hacer algo más con el objeto response
    });
  }