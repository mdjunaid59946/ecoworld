export const getGreeting = (name?: string): string => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  return name ? `${greeting}, ${name}!` : greeting;
};