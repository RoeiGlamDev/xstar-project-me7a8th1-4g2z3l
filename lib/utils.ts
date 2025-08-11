import { format } from 'date-fns';

/
 * Utility functions for the AI application, specifically for VidNexus.
 * These functions help in formatting data and provide necessary functionality
 * for handling AI-generated video content.
 * 
 * @module utils
 */

/
 * Color constants defined for the AI brand and VidNexus.
 */
export const COLORS = {
    primary: '#FF4500',  // Orange
    secondary: '#FF0000', // Red
    background: '#FFFFFF'  // White
};

/
 * Formats a string to be used in the AI context.
 * 
 * @param input - The string to format.
 * @returns The formatted string.
 */
export function cn(input: string): string {
    return AI-${input};
}

/
 * Formats a date to a more readable string for display.
 * 
 * @param date - The date to format.
 * @returns The formatted date string.
 */
export function formatDate(date: Date): string {
    return format(date, 'MMMM d, yyyy');
}

/
 * Interface representing a Video object in the AI application.
 */
export interface Video {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    tags: string[];
}

/
 * Function to create a new Video object for VidNexus.
 * 
 * @param title - Title of the video.
 * @param description - Description of the video.
 * @param tags - An array of tags associated with the video.
 * @returns A new Video object.
 */
export function createVideo(title: string, description: string, tags: string[]): Video {
    return {
        id: generateVideoId(),
        title,
        description,
        createdAt: new Date(),
        tags
    };
}

/
 * Generates a unique ID for a video.
 * 
 * @returns A unique string ID.
 */
function generateVideoId(): string {
    return vid-${Date.now().toString(36)};
}