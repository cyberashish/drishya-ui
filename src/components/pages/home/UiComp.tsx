import { Link } from "react-router";

interface UiCompProps {
  img: string;
  title: string;
  url: string;
}

const UiComp = ({ img, title, url }: UiCompProps) => {
  return (
    <div className="lg:col-span-3 md:col-span-6 col-span-12">
      <Link to={url}>
        <div className="border border-border rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-2 transition-[transform , shadow] duration-300 ease-in cursor-pointer hover:border-primary hover:border-2">
          <img src={img} alt="alert_img" className="w-full min-h-[234px]" />
          <div className="p-4">
            <p className="text-lg font-medium">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UiComp;
