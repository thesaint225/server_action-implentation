"use client";

import { useTransition } from "react";
import { addProductToDatabase } from "../../../actions/serveraction";

function AddButton() {
  const [isPending, startTransition] = useTransition();
  const formData = new FormData();
  formData.append("product", "macbook");
  formData.append("price", "1299");
  return (
    <button
      onClick={() => startTransition(() => addProductToDatabase(formData))}
      className="fixed bottom-10 right-10 bg-green-400 text-yellow-100 p-2 rounded-md w-48"
    >
      {isPending ? "Adding..." : "Add Mackbook pro"}
    </button>
  );
}

export default AddButton;
