import { IWebHookIssue } from "../interfaces/webhook.interfaces";

export function processWebHooks(issues: IWebHookIssue[]) {
    issues.find(({ status, event, action, id,  }) => {
  
      const response = {
        id,
        status,
        event,
        action
      };
  
      //console.log(response);

      if(response.event === 'issues') {
          console.log("Webhook------------");
          console.log(response);
          console.log("Webhook------------");
      }

      // o hacer algo más con el objeto response
    });
  }