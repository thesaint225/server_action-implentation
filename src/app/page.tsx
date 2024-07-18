import { revalidateTag } from "next/cache";

import { addProductToDatabase } from "../../actions/serveraction";
import { Product } from "../../typing";
import AddButton from "./components/AddButton";

export default async function Home() {
  const results = await fetch(
    "https://6698fc1f2069c438cd70dfc6.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  const products: Product[] = await results.json();

  return (
    <main>
      <h1 className="text-center text-3xl  font-bold">product warehouse</h1>
      <AddButton />
      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          placeholder="Enter the product name  "
          className="border border-red-400 p-2 rounded-md"
        />
        <input
          name="price"
          placeholder="Enter the product the price "
          className="border border-red-400 ml-2 p-2 rounded-md"
        />
        <button className="border border-blue-300 text-3xl bg-blue-500 text-yellow-50 rounded-md p-2">
          Add product
        </button>
      </form>
      <h2 className="font-bold p-5"> list of products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow-sm">
            <p>{product.product}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
