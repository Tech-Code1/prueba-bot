"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processIssues = void 0;
function processIssues(issues) {
    issues.find(({ url, labels, title, state, assignee }) => {
        const response = {
            url,
            labels,
            title,
            state,
            assignee: { avatar_url: assignee === null || assignee === void 0 ? void 0 : assignee.avatar_url, url: assignee === null || assignee === void 0 ? void 0 : assignee.url },
        };
        console.log(response);
        // o hacer algo más con el objeto response
    });
}
exports.processIssues = processIssues;
//# sourceMappingURL=processIssues.js.map