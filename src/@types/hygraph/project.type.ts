interface ProjectFeedbackClientProfile {
    id: string
    url: string
}

interface ProjectFeedbackClient {
    id: string
    name: string
    role: string
    profile: ProjectFeedbackClientProfile
}

interface ProjectFeedback {
    id: string
    content: string
    client: ProjectFeedbackClient
}

interface ProjectMedia {
    id: string
    url: string
}

interface Project {
    id: string
    name: string
    description: string
    industry: string
    slug: string
    services: string[]
    media: ProjectMedia[]
    feedback: ProjectFeedback
}

export interface ProjectResponse {
    project: Project
}
