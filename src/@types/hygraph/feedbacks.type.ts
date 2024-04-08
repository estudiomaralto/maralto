interface ClientProfile {
    url: string
}

interface Client {
    id: string
    name: string
    role: string
    profile: ClientProfile
}

interface ProjectCover {
    url: string
}

interface Project {
    cover?: ProjectCover
    slug?: string
}

export interface Feedback {
    content: string
    client: Client
    project?: Project
}

export interface FeedbackResponse {
    feedbacks: Feedback[]
}
