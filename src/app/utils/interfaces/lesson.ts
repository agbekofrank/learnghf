export interface Lesson {
    id: number;
    slug: string;
    tutor: {
        id: number;
        password: string;
        last_login: Date;
        is_superuser: boolean;
        username: string;
        first_name: string;
        last_name: string;
        email: string;
        is_staff: boolean;
        is_active: boolean;
        date_joined: Date;
        groups: [];
        user_permissions: [];
    };
    timestamp: string;
    updated: string;
    lesson_number: number;
    title: string;
    videos: [
        {
            id: number;
            slug: string;
            video: string;
            title: {
                id: number;
                title: string;
                topic: number;
            };
            lesson: {
                id: number;
                lesson_number: number;
                title: string;
                slug: string;
                timestamp: string;
                updated: string;
                tutor: object;

            }
        },
    ];
}