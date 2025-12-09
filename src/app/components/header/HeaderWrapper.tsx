import TopNavbar from "./TopNavbar";
import CategoryBar from "./CategoryBar";

export default function HeadWrapper() {
  return (
    <div>
      <TopNavbar />

      <div className="w-full z-20 relative">
        <CategoryBar />
      </div>
    </div>
  );
}
