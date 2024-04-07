interface ProjectCover {
    url: string
}

interface ProjectMedia {
    url: string
}

interface Project {
    cover: ProjectCover
    name: string
    slug: string
    id: string
    services: string[]
    industry: string
    createdAt: string // A data de criação é uma string em formato ISO 8601.
    media: ProjectMedia[]
}

export interface ProjectsResponse {
    projects: Project[]
}
