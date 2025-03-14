interface UserProfile {
    username: string;
    email: string;
    avatarUrl: string;
}
export declare const userProfile: import("vue").Ref<{
    username: string;
    email: string;
    avatarUrl: string;
}, UserProfile | {
    username: string;
    email: string;
    avatarUrl: string;
}>;
export declare function updateUserProfile(updatedProfile: Partial<UserProfile>): void;
export {};
