"use client";

import { useTransition } from "react";
import { addProductToDatabase } from "../../../actions/serveraction";

function AddButton() {
  const [isPending, startTransition] = useTransition();
  return (
    <button onclick={() => startTransition(() => addProductToDatabase())}>
      Add product
    </button>
  );
}

export default AddButton;
