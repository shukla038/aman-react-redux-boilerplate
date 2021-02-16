export const api = {
    repo:{
        GET_REPO_DETAILS : "https://api.github.com/repos/angular/angular",
        ISSUES_LIST : (searchQuery) => `https://api.github.com/search/issues?q=repo:${searchQuery.repo}+type:issue+state:${searchQuery.issueType}&per_page=${searchQuery.perPage}&page=${searchQuery.page}`,
        ISSUE_DETAILS: (issueId) => `https://api.github.com/repos/angular/angular/issues/${issueId}`
    }
} 