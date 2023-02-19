"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processWebHooks = void 0;
function processWebHooks(issues) {
    issues.find(({ status, event, action, id }) => {
        const response = {
            id,
            status,
            event,
            action
        };
        //console.log(response);
        if (response.event === 'issues') {
            console.log("Webhook------------");
            console.log(response);
            console.log("Webhook------------");
        }
        // o hacer algo más con el objeto response
    });
}
exports.processWebHooks = processWebHooks;
//# sourceMappingURL=processWebHooks.js.map