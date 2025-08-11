export const BRAND_NAME = "AI";

/
 * Color constants for the AI brand.
 * These colors represent the modern and vibrant identity of the brand.
 */
export const COLORS = {
    PRIMARY: "#FF4500",  // Orange
    SECONDARY: "#FF0000", // Red
    ACCENT: "#FFFFFF",    // White
};

/
 * Configuration settings for the AI application.
 * This includes brand-related information and technology industry specifics.
 */
export const CONFIG = {
    WEBSITE_NAME: "VidNexus",
    TAGLINE: "Harness the Power of AI to Create Stunning Videos",
    INDUSTRY: "Technology",
    DESCRIPTION: "VidNexus utilizes advanced artificial intelligence to revolutionize video creation, making it accessible and efficient for everyone.",
};

/
 * Interface for Video Generation Configuration.
 * This defines the structure for video generation requests within the AI application.
 */
export interface VideoGenerationConfig {
    title: string;
    duration: number; // in seconds
    resolution: '720p' | '1080p' | '4K';
    format: 'mp4' | 'mov';
    content: string; // the script or content to be used for the video
}

/
 * Interface for User Feedback.
 * This defines the structure for user feedback submissions on generated videos.
 */
export interface UserFeedback {
    videoId: string;
    rating: number; // 1 to 5 scale
    comment: string;
}

/
 * Exporting the constants and interfaces for use throughout the application.
 */
export default {
    BRAND_NAME,
    COLORS,
    CONFIG,
};