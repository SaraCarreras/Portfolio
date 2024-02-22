export function Section({ title, children, ...props }) {
  console.log({ ...props }, "props Section");
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
