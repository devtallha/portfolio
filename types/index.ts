export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export type ProjectType = 'AI' | 'SaaS' | 'Food Tech' | 'FinTech' | 'Healthcare' | 'EdTech';

export interface IProject {
    title: string;
    year: number;
    type: ProjectType;
    description: string;
    role: string;
    techStack: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}
