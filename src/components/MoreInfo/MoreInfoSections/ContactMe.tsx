import { iContactMe } from "../interfaces/iMoreInfoData";

export function ContactMe({ data }:{data: iContactMe}) {
  return (
    <>
      <p>Content Contact ME</p>
      {data.title}
    </>
  );
}
