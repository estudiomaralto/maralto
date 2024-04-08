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

export interface Project {
    id: string
    name: string
    description: string
    industry: string
    slug: string
    services: string[]
    createdAt: Date
    media: ProjectMedia[]
    cover: {
        id: string
        url: string
    }
    feedback: ProjectFeedback
}

export interface ProjectResponse {
    project: Project
}
