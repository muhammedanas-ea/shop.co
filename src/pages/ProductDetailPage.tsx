import Breadcrumb from "../components/common/breadcrumbs/Breadcrumb";

const ProductDetailPage = () => {
    const breadcrumbItems = [{ text: "Home", url: "/" },{ text: "Shop", url: "/category" }, { text: "Product Deatils" }];
  return (
    <div className="app-container mb-36">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex gap-5 flex-col lg:flex-row mt-3">
        <div className="lg:w-1/2 flex gap-3">
          <div className="flex flex-col gap-3">
            <div className="w-40 h-[11rem] bg-slate-500">

            </div>
            <div className="w-40 h-[11rem] bg-slate-500">

            </div>
            <div className="w-40 h-[11rem] bg-slate-500">

            </div>
          </div>
          <div>
            <div className="bg-slate-400"></div>
          </div>
        </div>
        <div className="lg:first-line:w-1/2">
        <h1 className="font-bold text-[24px] md:text-4xl sub-font">One Life Graphic T-shirt</h1>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;
