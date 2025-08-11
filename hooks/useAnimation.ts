import { useEffect, useState } from 'react';

/
 * Animation hook for AI's VidNexus platform, enhancing user experience
 * by providing custom animations for AI video interactions.
 * 
 * @module useAnimation
 */

/
 * Interface for animation options.
 */
interface AnimationOptions {
  duration?: number; // Duration of the animation in milliseconds
  delay?: number; // Delay before the animation starts
  easing?: string; // Easing function to use for the animation
}

/
 * Custom hook to handle animations for components on the VidNexus platform.
 * 
 * @param {AnimationOptions} options - Animation settings for the hook.
 * @returns {Object} - Object containing animation state and triggers.
 */
export const useAnimation = (options: AnimationOptions) => {
  const [isAnimating, setAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const animationDuration = options.duration || 300;
      const animationDelay = options.delay || 0;

      const timeout = setTimeout(() => {
        setAnimating(false);
      }, animationDuration + animationDelay);

      return () => clearTimeout(timeout);
    }
  }, [isAnimating, options]);

  /
   * Function to start the animation.
   */
  const startAnimation = () => {
    setAnimating(true);
  };

  return {
    isAnimating,
    startAnimation,
  };
};

/
 * Example usage of the useAnimation hook for an AI video component
 * within the VidNexus platform.
 * 
 * @example
 * const { isAnimating, startAnimation } = useAnimation({ duration: 500, easing: 'ease-in-out' });
 * 
 * return <button onClick={startAnimation} style={{ backgroundColor: 'orange', color: 'white' }}>
 *   {isAnimating ? 'Animating...' : 'Create AI Video'}
 * </button>;
 */