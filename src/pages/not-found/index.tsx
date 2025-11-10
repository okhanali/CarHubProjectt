import type { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] p-10 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h1 className="text-2xl font-bold">Sayfa Bulunamadı</h1>

      <p className="text-lg mt-3">
        Aradığınız sayfa bulunamadı. Lütfen başka bir sayfaya geçiş yapınız.
      </p>

      <Link to="/" className="text-blue-500 mt-5">
        Anasayfa'ya Git
      </Link>
    </div>
  );
};

export default NotFound;
