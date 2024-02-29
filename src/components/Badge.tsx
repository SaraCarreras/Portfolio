export function Badge({ children }: { children: string }) {
  return (
    <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">
      {children}
    </span>
  );
}
