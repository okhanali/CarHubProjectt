//* HOC: Higher Order Component
//Note: Normal component'lardan farklı olarak açılış ve kapanış etiketine sahiptir.
//Note: Etiket içerisine yazılan içeriğe "children" prop'u aracılğıyla erişilir.

import type { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Warning: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
      <div className="home-error-container">{children}</div>
    </div>
  );
};

export default Warning;
