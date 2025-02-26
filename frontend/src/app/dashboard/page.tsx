import AddProductForm from "@/components/dashboard/AddProductForm";

const page = () => {
  return (
    <>
      <div>Dashboard</div>
      <div>
        <button className="border-2 p-2 rounded-lg text-green-500">
          add product
        </button>
        <AddProductForm />
      </div>
    </>
  );
};

export default page;
