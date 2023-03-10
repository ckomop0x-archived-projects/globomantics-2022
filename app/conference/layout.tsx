import {FC, PropsWithChildren} from "react";

const ConferenceLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <section>
        {children}
      </section>
  );
}

export default ConferenceLayout
